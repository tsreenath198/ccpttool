package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientPositionStatusDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientPositionStatusMapper;
import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION_STATUS)
public class ClientPositionStatusController
		extends BaseController<ClientPositionStatusDTO, ClientPositionStatus, String> {

	@Autowired
	private ClientPositionStatusService clientPositionStatusService;

	@Override
	public BaseService<ClientPositionStatus, String> getService() {
		return clientPositionStatusService;
	}

	@Override
	public BaseMapper<ClientPositionStatusDTO, ClientPositionStatus, String> getMapper() {
		return Mappers.getMapper(ClientPositionStatusMapper.class);
	}

	@Override
	protected void validateAndClean(ClientPositionStatus model) {
		if (model.getCode() == null) {
			throw new ValidationException("Client Position Status Code cannot be null");
		}
	}

}
