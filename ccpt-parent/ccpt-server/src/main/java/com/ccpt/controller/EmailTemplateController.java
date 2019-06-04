package com.ccpt.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.factory.TemplateSubstitutorFactory;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.service.BaseService;
import com.ccpt.service.EmailTemplateService;
import com.ccpt.substitutor.ContentSubstitutor;

@RestController
@CrossOrigin
@RequestMapping(CCPTConstants.TEMPLATE)
public class EmailTemplateController extends BaseController<EmailTemplate, Integer> {

	@Autowired
	private EmailTemplateService emailTemplateService;

	@Autowired
	TemplateSubstitutorFactory factory;

	@GetMapping("/build/{type}")
	@ResponseBody
	public EmailContent buildContent(@PathVariable String type, @RequestParam Map<String, String> params) {
		EmailTemplate emailTemplate = emailTemplateService.getTemplateByType(type);
		ContentSubstitutor substitutor = factory.getSubstitutor(type);
		return substitutor.generate(emailTemplate, params);
	}

	@Override
	public BaseService<EmailTemplate, Integer> getService() {
		return emailTemplateService;
	}
}
