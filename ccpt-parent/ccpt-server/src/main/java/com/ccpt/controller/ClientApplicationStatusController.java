package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION_STATUS)
public class ClientApplicationStatusController extends BaseController<ClientApplicationStatus, String> {

	@Autowired
	private ClientApplicationStatusService clientApplicationStatusService;

	@Override
	public BaseService<ClientApplicationStatus, String> getService() {
		return clientApplicationStatusService;
	}

}
