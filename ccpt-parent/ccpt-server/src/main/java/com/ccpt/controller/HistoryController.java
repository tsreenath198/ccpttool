package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.BaseReturn;
import com.ccpt.service.EmailContentService;
import com.ccpt.service.SMSService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.HISTORY)
public class HistoryController {
	@Autowired
	private SMSService smsService;
	@Autowired
	private EmailContentService emailContentService;

	@GetMapping(CCPTConstants.EMAIL)
	@ResponseBody
	BaseReturn getAllEmails(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "100") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		return emailContentService.getAll(pageNo, pageSize, sortBy);
	}

	@GetMapping(CCPTConstants.SMS)
	@ResponseBody
	BaseReturn getAllSMS(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "100") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		return smsService.getAll(pageNo, pageSize, sortBy);
	}
}
