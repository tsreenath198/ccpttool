package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientPositionDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientPositionMapper;
import com.ccpt.model.ClientApplicationStatistics;
import com.ccpt.model.ClientPosition;
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

	@Override
	protected void validateAndClean(ClientPosition model) {
		if (model.getClosedBy().getId() == null) {
			model.setClosedBy(null);
		} else {
			model.setClosedBy(recruiterService.get(model.getClosedBy().getId()));
		}
		if (model.getAssignedTo().getId() == null) {
			model.setAssignedTo(null);
		} else {
			model.setAssignedTo(recruiterService.get(model.getAssignedTo().getId()));
		}
		if (model.getClient().getId() == null) {
			throw new ValidationException("Client cannot be null");
		} else {
			model.setClient(clientService.get(model.getClient().getId()));
		}
		if (model.getStatus().getCode() == null) {
			throw new ValidationException("Client Position Status cannot be null");
		} else {
			model.setStatus(ClientPositionStatusService.findByCode(model.getStatus().getCode()));
		}
	}
	
	@GetMapping("/getAllCps")
	public ResponseEntity<List<ClientApplicationStatistics>> getAllCps() {
		List<ClientApplicationStatistics> result = clientPositionService.getAllCps();
		return new ResponseEntity<List<ClientApplicationStatistics>>(result, HttpStatus.OK);

	}
}
