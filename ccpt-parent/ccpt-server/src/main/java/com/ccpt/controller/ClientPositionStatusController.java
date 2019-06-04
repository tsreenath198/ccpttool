package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION_STATUS)
public class ClientPositionStatusController extends BaseController<ClientPositionStatus, String> {

	@Autowired
	private ClientPositionStatusService clientPositionStatusService;

	@Override
	public BaseService<ClientPositionStatus, String> getService() {
		return clientPositionStatusService;
	}

}
