package com.ccpt.controller;

import java.io.IOException;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.repository.SmsTemplateRepository;
import com.ccpt.service.IClientPositionService;
import com.ccpt.service.IClientService;
import com.ccpt.util.StrSubstitutor;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SMS)
public class SMSController {

	@Value("${sms.url}")
	private String url;

	@Value("${sms.auth.key}")
	private String authKey;

	@Value("${sms.sender}")
	private String sender;

	@Value("${sms.route}")
	private String route;

	@Autowired
	private SmsTemplateRepository smsTemplateRepository;

	@Autowired
	private IClientPositionService clientPositionService;
	
	@Autowired
	private RestTemplate restTemplate;

	@Autowired
	private IClientService clientService;

	@PostMapping(CCPTConstants.SEND)
	public ResponseEntity<String> sendSMS(@RequestBody SMS sms) throws URISyntaxException {
		List<String> contactNumbers = sms.getContactNumbers();
		String message = sms.getMessage();

		String contactsCommaSeparated = String.join(",", contactNumbers);

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		String body = "authkey=" + authKey + "&sender=" + sender + "&route=" + route + "&message=" + message
				+ "&mobiles=" + contactsCommaSeparated;

		HttpEntity<String> request = new HttpEntity<String>(body, headers);

		ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
		return new ResponseEntity<String>(response.getBody(), HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.TEMPLATE + "/{id}")
	public ResponseEntity<SmsTemplate> bulkSMSForClientPosition(@PathVariable Integer id, HttpSession session)
			throws AddressException, MessagingException, IOException {
		System.out.println("======" + session.getAttribute("username"));

		ClientPosition clientPosition = clientPositionService.getClientPositionById(id);

		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("joblocation", clientPosition.getLocation());
		valuesMap.put("client", clientService.getClientById(clientPosition.getClientId()).getName());
		valuesMap.put("job", clientPosition.getRole());

		SmsTemplate templateBean = smsTemplateRepository.getSmsTemplateByType("send job");
		String templateBody = templateBean.getBody();
		SmsTemplate st = new SmsTemplate();

		String body = StrSubstitutor.replace(templateBody, valuesMap);
		st.setBody(body);

		return new ResponseEntity<SmsTemplate>(st, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<SmsTemplate>> getAllTemplates() {
		List<SmsTemplate> templateList = smsTemplateRepository.findAll();
		return new ResponseEntity<List<SmsTemplate>>(templateList, HttpStatus.OK);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<SmsTemplate> updateClientPosition(@RequestBody SmsTemplate templateBean)
			throws ResourceNotFoundException {
		smsTemplateRepository.findById(templateBean.getId())
				.orElseThrow(() -> new ResourceNotFoundException("No data found on id:" + templateBean.getId()));
		SmsTemplate updatedTemplate = smsTemplateRepository.save(templateBean);
		return new ResponseEntity<SmsTemplate>(updatedTemplate, HttpStatus.OK);
	}

}
