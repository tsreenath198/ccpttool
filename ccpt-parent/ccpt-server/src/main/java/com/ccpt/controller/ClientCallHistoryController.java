package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientCallHistoryService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_CALL_HISTORY)
public class ClientCallHistoryController extends BaseController<ClientCallHistory, Integer> {

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	@Override
	public BaseService<ClientCallHistory, Integer> getService() {
		return clientCallHistoryService;
	}

}
