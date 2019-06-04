package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ConsultantStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_STATUS)
public class ConsultantStatusController extends BaseController<ConsultantStatus, String> {

	@Autowired
	private ConsultantStatusService consultantStatusService;

	@Override
	public BaseService<ConsultantStatus, String> getService() {
		return consultantStatusService;
	}

}
