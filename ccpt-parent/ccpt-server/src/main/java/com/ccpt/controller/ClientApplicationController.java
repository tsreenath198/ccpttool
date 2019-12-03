package com.ccpt.controller;

import java.util.List;

import javax.persistence.EntityExistsException;
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
import com.ccpt.dto.ClientApplicationDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientApplicationMapper;
import com.ccpt.model.ApplicationBody;
import com.ccpt.model.BaseReturn;
import com.ccpt.model.CAStatistics;
import com.ccpt.model.ClientApplication;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientApplicationStatusService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION)
public class ClientApplicationController extends BaseController<ClientApplicationDTO, ClientApplication, Integer> {

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private RecruiterService recruiterService;

	@Autowired
	private ConsultantService consultantService;

	@Autowired
	private ClientApplicationStatusService clientApplicationStatusService;

	@Override
	public BaseService<ClientApplication, Integer> getService() {
		return clientApplicationService;
	}

	@Override
	public BaseMapper<ClientApplicationDTO, ClientApplication, Integer> getMapper() {
		return Mappers.getMapper(ClientApplicationMapper.class);
	}

	/*
	 * Retrieves all client applications based on given on client position id
	 * which are active
	 */
	@GetMapping("/getAllActiveCAByCpID")
	public ResponseEntity<List<ClientApplication>> getAllActiveCAByCpID(@RequestParam Integer cpId) {
		List<ClientApplication> result = clientApplicationService.getAllActiveCAByCpID(cpId);
		return new ResponseEntity<List<ClientApplication>>(result, HttpStatus.OK);
	}

	/**/
	@GetMapping("/showBodyMail")
	public ResponseEntity<ApplicationBody> showBodyMail(@RequestParam Integer caId) {
		ApplicationBody result = clientApplicationService.showBodyMail(caId);
		return new ResponseEntity<ApplicationBody>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves id's and generated codes whose status is JobConfirmed from
	 * client applications which are active
	 */
	@GetMapping("/getJobConfirmedCAs")
	public ResponseEntity<List<CAStatistics>> getJobConfirmedCAs() {
		List<CAStatistics> result = clientApplicationService.getJobConfirmedCAs();
		return new ResponseEntity<List<CAStatistics>>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves id's and generated codes from client applications which are
	 * active
	 */
	@GetMapping("/getCAStatistics")
	public ResponseEntity<List<CAStatistics>> getCAStatistics() {
		List<CAStatistics> result = clientApplicationService.getCAStatistics();
		return new ResponseEntity<List<CAStatistics>>(result, HttpStatus.OK);
	}

	/* Retrieves client applications based on the search key which are active */
	@GetMapping("/search")
	public ResponseEntity<List<ClientApplication>> search(@RequestParam(required = false) Integer clientId,
			@RequestParam(required = false) Integer clientPosId, @RequestParam(required = false) String statusType,
			@RequestParam(required = false) String searchKey) {
		List<ClientApplication> result = clientApplicationService.search(clientId, clientPosId, statusType, searchKey);
		return new ResponseEntity<List<ClientApplication>>(result, HttpStatus.OK);
	}

	/* Retrieves client applications based on status which are active */
	@GetMapping(CCPTConstants.GET_ALL_BY_STATUS)
	public ResponseEntity<BaseReturn> getAllByStatus(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "50") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy,
			@RequestParam(required = false) String status) {
		BaseReturn br = clientApplicationService.getAllByStatus(pageNo, pageSize, sortBy, status);
		return new ResponseEntity<BaseReturn>(br, HttpStatus.OK);
	}

	/*
	 * updates client application status based on the list of
	 * clientApplicationIds
	 */
	@PutMapping("/updateStatus")
	public ResponseEntity<Void> updateStatus(@RequestBody List<Integer> caIds, @RequestParam String status) {
		for (Integer caId : caIds) {
			clientApplicationService.updateStatus(caId, status);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	/* validates client application */
	@Override
	protected void validateAndClean(ClientApplication model) {
		if (model.getClientPosition() == null || model.getClientPosition().getId() == null)
			throw new ValidationException("Client Position cannot be null");
		else
			model.setClientPosition(clientPositionService.get(model.getClientPosition().getId()));
		if (model.getConsultant() == null || model.getConsultant().getId() == null)
			throw new ValidationException("Consultant cannot be null");
		else
			model.setConsultant(consultantService.get(model.getConsultant().getId()));
		if (model.getCreator() == null || model.getCreator().getId() == null)
			throw new ValidationException("Application Creator cannot be null");
		else
			model.setCreator(recruiterService.get(model.getCreator().getId()));
		if (model.getStatus() == null || model.getStatus().getCode() == null)
			throw new ValidationException("Application Status cannot be null");
		else
			model.setStatus(clientApplicationStatusService.findByCode(model.getStatus().getCode()));
		if (model.getId() == null) {
			Integer check = clientApplicationService.checkPositionWithConsultant(model.getClientPosition().getId(),
					model.getConsultant().getId());
			if (check >= 1)
				throw new EntityExistsException(
						"Client Application is already exist with this consultant and client position");
		}
	}
}
