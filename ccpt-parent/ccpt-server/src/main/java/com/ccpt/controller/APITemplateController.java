package com.ccpt.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.TemplateBean;
import com.ccpt.repository.TemplateBeanRepository;
import com.ccpt.service.IClientPositionService;
import com.ccpt.service.IClientService;
import com.ccpt.util.StrSubstitutor;

@RestController
@CrossOrigin
@RequestMapping(CCPTConstants.EMAIL)
public class APITemplateController {
	@Autowired
	private TemplateBeanRepository templateBeanRepository;

	@Autowired
	private IClientPositionService clientPositionService;
	@Autowired
	private IClientService clientService;

	@GetMapping(CCPTConstants.TEMPLATE + "/{id}")
	public ResponseEntity<EmailContent> massTemplateClientPosition(@PathVariable Integer id, HttpSession session)
			throws AddressException, MessagingException, IOException {
		System.out.println("======" + session.getAttribute("username"));
		EmailContent emailContent = new EmailContent();

		ClientPosition clientPosition = clientPositionService.getClientPositionById(id);

		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("emailid", "tsreenath1985@gmail.com");
		valuesMap.put("phone", "9848071296");
		valuesMap.put("role", clientPosition.getRole());
		valuesMap.put("joblocation", clientPosition.getLocation());
		valuesMap.put("sector", clientService.getClientById(clientPosition.getClientId()).getIndustry());
		valuesMap.put("jobDescription", clientPosition.getAdditionalComments());
		valuesMap.put("jobSpecification", clientPosition.getRequiredSkills());

		TemplateBean templateBean = templateBeanRepository.getTemplateByType("Mass Mailing");
		String templateSubject = templateBean.getSubject();
		String templateBody = templateBean.getBody();

		String subject = StrSubstitutor.replace(templateSubject, valuesMap);
		String body = StrSubstitutor.replace(templateBody, valuesMap);
		emailContent.setBody(body);
		emailContent.setSubject(subject);

		return new ResponseEntity<EmailContent>(emailContent, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<TemplateBean>> getAllTemplates() {
		List<TemplateBean> templateList = templateBeanRepository.findAll();
		return new ResponseEntity<List<TemplateBean>>(templateList, HttpStatus.OK);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<TemplateBean> updateClientPosition(@RequestBody TemplateBean templateBean)
			throws ResourceNotFoundException {
		templateBeanRepository.findById(templateBean.getId())
				.orElseThrow(() -> new ResourceNotFoundException("No data found on id:" + templateBean.getId()));
		TemplateBean updatedTemplate = templateBeanRepository.save(templateBean);
		return new ResponseEntity<TemplateBean>(updatedTemplate, HttpStatus.OK);
	}

}
