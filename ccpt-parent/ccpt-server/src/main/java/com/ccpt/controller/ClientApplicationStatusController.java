package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientApplicationStatusDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientApplicationStatusMapper;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION_STATUS)
public class ClientApplicationStatusController
		extends BaseController<ClientApplicationStatusDTO, ClientApplicationStatus, String> {

	@Autowired
	private ClientApplicationStatusService clientApplicationStatusService;

	@Override
	public BaseService<ClientApplicationStatus, String> getService() {
		return clientApplicationStatusService;
	}

	@Override
	public BaseMapper<ClientApplicationStatusDTO, ClientApplicationStatus, String> getMapper() {
		return Mappers.getMapper(ClientApplicationStatusMapper.class);
	}

	@Override
	protected void validateAndClean(ClientApplicationStatus model) {
		if (model.getCode() == null) {
			throw new ValidationException("Client Application Status Code cannot be null");
		}
	}
}
