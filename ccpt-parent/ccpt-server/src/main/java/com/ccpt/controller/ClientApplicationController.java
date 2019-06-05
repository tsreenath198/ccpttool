package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientApplicationDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientApplicationMapper;
import com.ccpt.model.ClientApplication;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION)
public class ClientApplicationController extends BaseController<ClientApplicationDTO, ClientApplication, Integer> {

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public BaseService<ClientApplication, Integer> getService() {
		return clientApplicationService;
	}

	@Override
	public BaseMapper<ClientApplicationDTO, ClientApplication, Integer> getMapper() {
		return Mappers.getMapper(ClientApplicationMapper.class);
	}

}
