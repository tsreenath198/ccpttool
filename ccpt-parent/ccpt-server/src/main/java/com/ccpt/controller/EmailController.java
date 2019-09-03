
package com.ccpt.controller;

import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.EmailContent;
import com.ccpt.service.EmailContentService;
import com.ccpt.service.EmailService;

@Controller
@CrossOrigin
public class EmailController {

	@Autowired
	private EmailContentService emailContentService;

	@Autowired
	private EmailService emailService;

	@PostMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail(@RequestBody EmailContent emailContent) throws Exception {
		try {
			String uuid = UUID.randomUUID().toString();
			String body = "Email ref:#".concat(uuid).concat("\r\n").concat(emailContent.getBody());
			emailService.sendEmailWithAttachments(emailContent.getToEmails(), emailContent.getSubject(), body,
					emailContent.getCc(), emailContent.getBcc(), emailContent.getUploadFiles());
			emailContentService.save(emailContent);
		} catch (Exception e) {
			e.printStackTrace();
			throw new Exception("Sending Email is Failed");
		}
		return new ResponseEntity<String>(HttpStatus.OK);
	}

}