package com.ccpt.controller;

import java.util.ArrayList;
import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientPositionDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientPositionMapper;
import com.ccpt.model.BaseReturn;
import com.ccpt.model.CP;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.model.EmptyDataStatistics;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ClientPositionStatusService;
import com.ccpt.service.ClientService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION)
public class ClientPositionController extends BaseController<ClientPositionDTO, ClientPosition, Integer> {

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private RecruiterService recruiterService;

	@Autowired
	private ClientService clientService;

	@Autowired
	private ClientPositionStatusService ClientPositionStatusService;

	@Override
	public BaseService<ClientPosition, Integer> getService() {
		return clientPositionService;
	}

	@Override
	public BaseMapper<ClientPositionDTO, ClientPosition, Integer> getMapper() {
		return Mappers.getMapper(ClientPositionMapper.class);
	}

	/* Retrieves list of active id's and names from client position */
	@GetMapping("/getAllCps")
	public ResponseEntity<List<DropDownStatistics>> getAllCps() {
		List<DropDownStatistics> result = clientPositionService.getAllCps();
		return new ResponseEntity<List<DropDownStatistics>>(result, HttpStatus.OK);
	}

	/* Updates client position */
	@PutMapping("/updatePosting")
	public ResponseEntity<Void> updateStatus(@RequestBody CP model) {
		if (model.getShineURL() == null && model.getAlmaConnectURL() == null && model.getNaukriURL() == null) {
			throw new ValidationException("ShineURL and AlmaConnectURL and NaukriURL cannot be null");
		}
		clientPositionService.updatePosting(model);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	/*
	 * Retrieves number of records and the list of active client positions based
	 * on the status
	 */
	@GetMapping(CCPTConstants.GET_ALL_BY_STATUS)
	public ResponseEntity<BaseReturn> getAllByStatus(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "50") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy,
			@RequestParam(required = false) String status) {
		BaseReturn br = clientPositionService.getAllByStatus(pageNo, pageSize, sortBy, status);
		return new ResponseEntity<BaseReturn>(br, HttpStatus.OK);

	}

	/* Retrieves list of empty generated codes and values */
	@GetMapping("/getEmptyData")
	public ResponseEntity<List<EmptyDataStatistics>> getEmptyData() {
		EmptyDataStatistics emptyUrlStatistics = null;
		List<EmptyDataStatistics> resultList = new ArrayList<EmptyDataStatistics>();
		List<ClientPosition> result = clientPositionService.getEmptyData();
		String csv = "";
		StringBuilder sb;
		for (ClientPosition clientPosition : result) {
			emptyUrlStatistics = new EmptyDataStatistics();
			sb = new StringBuilder();
			emptyUrlStatistics.setGeneratedCode(clientPosition.getGeneratedCode());
			if (clientPosition.getShineURL() == null)
				sb.append("ShineURL,");
			if (clientPosition.getNaukriURL() == null)
				sb.append("NaukriURL,");
			if (clientPosition.getShinePosting() == null)
				sb.append("ShinePosting,");
			if (clientPosition.getNaukriPosting() == null)
				sb.append("NaukriPosting,");
			if (clientPosition.getFacebookPosting() == null)
				sb.append("FacebookPosting,");
			if (clientPosition.getTwitterPosting() == null)
				sb.append("TwitterPosting,");
			if (clientPosition.getShineMassMailing() == null)
				sb.append("ShineMassMailing,");
			if (clientPosition.getNaukriMassMailing() == null)
				sb.append("NaukriMassMailing");
			csv = sb.toString();
			emptyUrlStatistics.setValue(csv);
			resultList.add(emptyUrlStatistics);
		}
		return new ResponseEntity<List<EmptyDataStatistics>>(resultList, HttpStatus.OK);
	}

	/* Validates client position */
	@Override
	protected void validateAndClean(ClientPosition model) {
		if (model.getClosedBy().getId() == null)
			model.setClosedBy(null);
		else
			model.setClosedBy(recruiterService.get(model.getClosedBy().getId()));
		if (model.getAssignedTo().getId() == null)
			model.setAssignedTo(null);
		else
			model.setAssignedTo(recruiterService.get(model.getAssignedTo().getId()));
		if (model.getClient().getId() == null)
			throw new ValidationException("Client cannot be null");
		else
			model.setClient(clientService.get(model.getClient().getId()));
		if (model.getStatus().getCode() == null)
			throw new ValidationException("Client Position Status cannot be null");
		else
			model.setStatus(ClientPositionStatusService.findByCode(model.getStatus().getCode()));
		if (model.getRequiredSkills() == null)
			throw new ValidationException("Required skills cannot be null");
		else
			model.setRequiredSkills(model.getRequiredSkills());
	}
}
