package com.ccpt.controller;

import java.util.List;
import java.util.Map;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.EmailTemplateDTO;
import com.ccpt.factory.TemplateSubstitutorFactory;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.EmailTemplateMapper;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.service.BaseService;
import com.ccpt.service.EmailTemplateService;
import com.ccpt.substitutor.ContentSubstitutor;

@RestController
@CrossOrigin
@RequestMapping(CCPTConstants.TEMPLATE)
public class EmailTemplateController extends BaseController<EmailTemplateDTO, EmailTemplate, Integer> {

	@Autowired
	private EmailTemplateService emailTemplateService;

	@Autowired
	TemplateSubstitutorFactory factory;

	@PostMapping("/build/{type}")
	@ResponseBody
	public EmailContent buildContent(@PathVariable String type, @RequestBody Map<String, String> params)
			throws Exception {
		EmailTemplate emailTemplate = emailTemplateService.getTemplateByType(type);
		ContentSubstitutor substitutor = factory.getSubstitutor(type);
		return substitutor.generate(emailTemplate, params);
	}

	@PostMapping("/getClientApps")
	@ResponseBody
	public String getClientApps(@RequestBody List<Integer> ids) throws Exception {
		return emailTemplateService.getClientApps(ids);

	}

	@Override
	public BaseService<EmailTemplate, Integer> getService() {
		return emailTemplateService;
	}

	@Override
	public BaseMapper<EmailTemplateDTO, EmailTemplate, Integer> getMapper() {
		return Mappers.getMapper(EmailTemplateMapper.class);
	}

}
