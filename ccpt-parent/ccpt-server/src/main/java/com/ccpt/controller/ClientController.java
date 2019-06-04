package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.Client;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT)
public class ClientController extends BaseController<Client, Integer> {

	@Autowired
	private ClientService clientService;

	@Override
	public BaseService<Client, Integer> getService() {
		return clientService;
	}
}