package com.ccpt.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.util.StrSubstitutor;

@RestController
public class APITemplateController {

	@Value("${ccpt.email}")
	private String email;

	@GetMapping(CCPTConstants.TEMPLATE)
	public ResponseEntity<String> template() throws AddressException, MessagingException, IOException {

		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("email", email);
		// valuesMap.put("target", "lazy dog");
		String templateString = "getting mail from ${email}.";
		StrSubstitutor sub = new StrSubstitutor(valuesMap);
		String resolvedString = sub.replace(templateString);
		System.out.println("resolvedString----:" + resolvedString);

		return new ResponseEntity<String>("template added succesfully", HttpStatus.OK);
	}

}
