package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.OtherContact;
import com.ccpt.service.BaseService;
import com.ccpt.service.OtherContactService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONTACT)
public class OtherContactController extends BaseController<OtherContact, Integer> {

	@Autowired
	private OtherContactService otherContactService;

	@Override
	public BaseService<OtherContact, Integer> getService() {
		return otherContactService;
	}

}