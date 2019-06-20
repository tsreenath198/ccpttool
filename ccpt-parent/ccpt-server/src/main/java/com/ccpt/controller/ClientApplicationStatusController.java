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
import com.ccpt.dto.ClientApplicationStatusDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientApplicationStatusMapper;
import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION_STATUS)
public class ClientApplicationStatusController
		extends BaseController<ClientApplicationStatusDTO, ClientApplicationStatus, Integer> {

	@Autowired
	private ClientApplicationStatusService clientApplicationStatusService;

	@Override
	public BaseService<ClientApplicationStatus, Integer> getService() {
		return clientApplicationStatusService;
	}

	@Override
	public BaseMapper<ClientApplicationStatusDTO, ClientApplicationStatus, Integer> getMapper() {
		return Mappers.getMapper(ClientApplicationStatusMapper.class);
	}

	@Override
	protected void validateAndClean(ClientApplicationStatus model) {
		if (model.getCode() == null) {
			throw new ValidationException("Client Application Status Code cannot be null");
		}
	}

	@GetMapping("/getAllCAStatus")
	public ResponseEntity<List<DropDownStatistics>> getAllCAStatus() {
		List<DropDownStatistics> result = clientApplicationStatusService.getAllCAStatus();
		return new ResponseEntity<List<DropDownStatistics>>(result, HttpStatus.OK);

	}
}
