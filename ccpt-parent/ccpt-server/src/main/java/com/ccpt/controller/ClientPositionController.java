package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPosition;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION)
public class ClientPositionController extends BaseController<ClientPosition, Integer> {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public BaseService<ClientPosition, Integer> getService() {
		return clientPositionService;
	}
}
