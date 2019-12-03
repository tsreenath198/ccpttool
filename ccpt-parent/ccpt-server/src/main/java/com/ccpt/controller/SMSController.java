package com.ccpt.controller;

import java.net.URISyntaxException;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.SMSDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.SMSMapper;
import com.ccpt.model.SMS;
import com.ccpt.service.BaseService;
import com.ccpt.service.SMSService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SMS)
public class SMSController extends BaseController<SMSDTO, SMS, Integer> {

	@Value("${sms.url}")
	private String url;

	@Value("${sms.auth.key}")
	private String authKey;

	@Value("${sms.sender}")
	private String sender;

	@Value("${sms.route}")
	private String route;

	@Autowired
	private SMSService smsService;

	@Autowired
	private RestTemplate restTemplate;

	@PostMapping(CCPTConstants.SEND)
	public ResponseEntity<String> sendSMS(@RequestBody SMS sms) throws URISyntaxException {
		String message = sms.getMessage();
		String contactsCommaSeparated = sms.getContactNumbers();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		String body = "authkey=" + authKey + "&sender=" + sender + "&route=" + route + "&message=" + message
				+ "&mobiles=" + contactsCommaSeparated;
		HttpEntity<String> request = new HttpEntity<String>(body, headers);
		try {
			ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
			sms.setDescription(response.getBody());
			smsService.save(sms);
			return new ResponseEntity<String>(response.getBody(), HttpStatus.OK);
		} catch (Exception e) {
		}
		return null;
	}

	@Override
	public BaseService<SMS, Integer> getService() {
		return smsService;
	}

	@Override
	public BaseMapper<SMSDTO, SMS, Integer> getMapper() {
		return Mappers.getMapper(SMSMapper.class);
	}

	@Override
	protected void validateAndClean(SMS model) {
		if (model.getMessage() == null)
			throw new ValidationException("Message cannot be null");
	}
}
