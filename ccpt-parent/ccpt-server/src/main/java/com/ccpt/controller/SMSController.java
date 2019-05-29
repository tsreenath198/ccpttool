package com.ccpt.controller;

import java.net.URL;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
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
	public ResponseEntity<String> sendSMS(@RequestBody SMS sms) {
		List<String> contactNumbers = sms.getContactNumbers();
		String message = sms.getMessage();
		RestTemplate restTemplate = new RestTemplate();
		String contactsCommaSeparated = String.join(",", contactNumbers);
		final String url = "http://sms.bulksmsserviceproviders.com/api/send_http.php?"
				+ "authkey=7dc7c47175bbfd1b0b3286ee0e42acdd&sender=TLTCNR&route=4&mobiles=" + contactsCommaSeparated
				+ "&message=" + message;

		Object request = null;
		Class responseType = null;
		restTemplate.postForEntity(url, request, responseType);

		return new ResponseEntity<String>(HttpStatus.OK);
	}

}
