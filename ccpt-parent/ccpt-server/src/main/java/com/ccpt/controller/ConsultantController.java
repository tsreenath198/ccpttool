package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.Consultant;
import com.ccpt.service.BaseService;
import com.ccpt.service.ConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT)
public class ConsultantController extends BaseController<Consultant, Integer> {

	@Autowired
	private ConsultantService consultantService;

	@Override
	public BaseService<Consultant, Integer> getService() {
		return consultantService;
	}

}
