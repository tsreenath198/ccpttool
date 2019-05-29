package com.ccpt.controller;

import java.net.URISyntaxException;
import java.util.List;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.SMS;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SMS)
public class SMSController {

	@PostMapping(CCPTConstants.SEND)
	public ResponseEntity<String> sendSMS(@RequestBody SMS sms) throws URISyntaxException {
		List<String> contactNumbers = sms.getContactNumbers();
		String message = sms.getMessage();
		RestTemplate restTemplate = new RestTemplate();
		String contactsCommaSeparated = String.join(",", contactNumbers);
		final String url = "http://sms.bulksmsserviceproviders.com/api/send_http.php";

		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("authkey", "7dc7c47175bbfd1b0b3286ee0e42acdd");
		map.add("sender", "TLTCNR");
		map.add("route", "4");
		map.add("message", message);
		map.add("mobiles", contactsCommaSeparated);

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);

		ResponseEntity<String> response = restTemplate.postForEntity(url, request, String.class);
		return new ResponseEntity<String>(response.getBody(), HttpStatus.OK);
	}

}
