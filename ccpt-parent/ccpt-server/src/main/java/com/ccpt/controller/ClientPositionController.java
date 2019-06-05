package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientPositionDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientPositionMapper;
import com.ccpt.model.ClientPosition;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION)
public class ClientPositionController extends BaseController<ClientPositionDTO, ClientPosition, Integer> {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public BaseService<ClientPosition, Integer> getService() {
		return clientPositionService;
	}

	@Override
	public BaseMapper<ClientPositionDTO, ClientPosition, Integer> getMapper() {
		return Mappers.getMapper(ClientPositionMapper.class);
	}
}
