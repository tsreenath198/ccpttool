package com.ccpt.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.TemplateBean;
import com.ccpt.repository.TemplateBeanRepository;
import com.ccpt.service.IClientPositionService;
import com.ccpt.util.StrSubstitutor;

@RestController
public class APITemplateController {
	@Autowired
	private TemplateBeanRepository templateBeanRepository;
	
	@Autowired
	private IClientPositionService clientPositionService;

// client position id ==? type mass mailing 
	@GetMapping(CCPTConstants.TEMPLATE)
	public ResponseEntity<String> template() throws AddressException, MessagingException, IOException {

		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("role", "Accountant");
		valuesMap.put("joblocation", "hyderabad");
		valuesMap.put("sector", "Finance");
		valuesMap.put("jobDescription", "jobDescription");
		valuesMap.put("jobSpecification", "jobSpecification");
		
		TemplateBean templateBean=templateBeanRepository.findById(1).get();
		String templateSubject=templateBean.getSubject();
		String templateBody=templateBean.getBody();
		
		StrSubstitutor sub = new StrSubstitutor(valuesMap);
		
		String subject = sub.replace(templateSubject);
		String body = sub.replace(templateBody);
		
		System.out.println("subject----:" + subject);
		System.out.println("body----:" + body);
		
		return new ResponseEntity<String>(subject+body, HttpStatus.OK);
	}
	@GetMapping(CCPTConstants.TEMPLATE+"/{id}")
	public ResponseEntity<String> massTemplateConsultantPosition(@PathVariable Integer id) throws AddressException, MessagingException, IOException {

		ClientPosition consultantPosition=clientPositionService.getClientPositionById(id);
		
		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("role", consultantPosition.getRole());
		valuesMap.put("joblocation", consultantPosition.getLocation());
		valuesMap.put("sector", "Finance");
		valuesMap.put("jobDescription", consultantPosition.getAdditionalComments());
		valuesMap.put("jobSpecification", consultantPosition.getRequiredSkills());
		
		TemplateBean templateBean=templateBeanRepository.findById(1).get();
		String templateSubject=templateBean.getSubject();
		String templateBody=templateBean.getBody();
		
		StrSubstitutor sub = new StrSubstitutor(valuesMap);
		
		String subject = sub.replace(templateSubject);
		String body = sub.replace(templateBody);
		
		System.out.println("subject----:" + subject);
		System.out.println("body----:" + body);
		
		return new ResponseEntity<String>(subject+body, HttpStatus.OK);
	}

	
	
}