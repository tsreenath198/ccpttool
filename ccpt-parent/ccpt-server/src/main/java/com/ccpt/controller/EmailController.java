package com.ccpt.controller;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.util.StrSubstitutor;

@RestController
public class EmailController {

	@Autowired
	public JavaMailSender javaMailSender;

	@Autowired
	public SimpleMailMessage template;

	@GetMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail() throws AddressException, MessagingException, IOException {

		Map<String, String> valuesMap = new HashMap<String, String>();
		valuesMap.put("role", "Accountant");
		valuesMap.put("joblocation", "hyderabad");
		valuesMap.put("sector", "Finance");
		valuesMap.put("jobDescription", "jobDescription");
		valuesMap.put("jobSpecification", "jobSpecification");

		String subject = StrSubstitutor.replace(template.getSubject(), valuesMap);
		String body = StrSubstitutor.replace(template.getText(), valuesMap);

		sendmail("pavan.uskcorp@gmail.com", subject, body);
		return new ResponseEntity<String>("Email sent successfully", HttpStatus.OK);
	}

	void sendmail(String to, String subject, String body) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(to);
		msg.setSubject(subject);
		msg.setText(body);
		javaMailSender.send(msg);
	}

	/*
	 * void sendEmailWithAttachment(String to, String subject, String body)
	 * throws MessagingException, IOException { MimeMessage msg =
	 * javaMailSender.createMimeMessage(); MimeMessageHelper helper = new
	 * MimeMessageHelper(msg, true); helper.setTo(to);
	 * helper.setSubject(subject); helper.setText(body, true);
	 * FileSystemResource file = new FileSystemResource( new
	 * File("C:\\Users\\lenovo\\Desktop\\GIT Total Commands with examples.txt.docx"
	 * )); helper.addAttachment("GIT Total Commands with examples.txt.docx",
	 * file); javaMailSender.send(msg);
	 * 
	 * }
	 */
}
