package com.ccpt.controller;

import java.io.File;
import java.io.IOException;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.EmailContent;
import com.ccpt.service.EmailContentService;

@Controller
@CrossOrigin
public class EmailController {

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private EmailContentService emailContentService;

	@PostMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail(@RequestBody EmailContent emailContent) throws Exception {
		try {
			sendmail(emailContent.getToEmails(), emailContent.getSubject(), emailContent.getBody());
			emailContentService.save(emailContent);
		} catch (Exception e) {
			throw new Exception("Sending Email is Failed");
		}
		return null;
	}

	void sendmail(String toCSV, String subject, String body) {
		SimpleMailMessage msg = new SimpleMailMessage();
		msg.setTo(toCSV);
		msg.setSubject(subject);
		msg.setText(body);
		javaMailSender.send(msg);
	}

	void sendEmailWithAttachment(String to, String subject, String body) throws MessagingException, IOException {
		MimeMessage msg = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(msg, true);
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setText(body, true);
		FileSystemResource file = new FileSystemResource(
				new File("C:\\Users\\lenovo\\Desktop\\GIT Total Commands with examples.txt.docx"));
		helper.addAttachment("GIT Total Commands with examples.txt.docx", file);
		javaMailSender.send(msg);

	}

}
