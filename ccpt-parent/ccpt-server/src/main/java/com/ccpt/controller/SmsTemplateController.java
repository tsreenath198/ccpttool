package com.ccpt.controller;

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
import com.ccpt.dto.SmsTemplateDTO;
import com.ccpt.factory.TemplateSubstitutorFactory;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.SMSTemplateMapper;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.BaseService;
import com.ccpt.service.SmsTemplateService;
import com.ccpt.substitutor.ContentSubstitutor;

@RestController
@CrossOrigin
@RequestMapping(CCPTConstants.TEMPLATE + "/sms")
public class SmsTemplateController extends BaseController<SmsTemplateDTO, SmsTemplate, Integer> {

	@Autowired
	private SmsTemplateService smsTemplateService;

	@Autowired
	TemplateSubstitutorFactory factory;

	/* Generate SmsTemplete from Database based on type */
	@PostMapping("/build/{type}")
	@ResponseBody
	public SMS buildContent(@PathVariable String type, @RequestBody Map<String, String> params) throws Exception {
		SmsTemplate smsTemplate = smsTemplateService.getTemplateByType(type);
		ContentSubstitutor substitutor = factory.getSubstitutor(type);
		return substitutor.generate(smsTemplate, params);
	}

	@Override
	public BaseService<SmsTemplate, Integer> getService() {
		return smsTemplateService;
	}

	@Override
	public BaseMapper<SmsTemplateDTO, SmsTemplate, Integer> getMapper() {
		return Mappers.getMapper(SMSTemplateMapper.class);
	}
}
