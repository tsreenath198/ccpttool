package com.ccpt.controller;

import java.io.IOException;
import java.util.Date;
import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Multipart;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeBodyPart;
import javax.mail.internet.MimeMessage;
import javax.mail.internet.MimeMultipart;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ccpt.constants.CCPTConstants;

@RestController
public class EmailController {
	@GetMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail() throws AddressException, MessagingException, IOException {
		sendmail();
		return new ResponseEntity<String>("Email sent successfully", HttpStatus.OK);
	}

	private void sendmail() throws AddressException, MessagingException, IOException {
		Properties props = new Properties();
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.smtp.host", "smtp.gmail.com");
		props.put("mail.smtp.port", "587");
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		Session session = Session.getInstance(props, new javax.mail.Authenticator() {
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication("pavan.uskcorp@gmail.com", "password");
			}
		});
		Message msg = new MimeMessage(session);
		msg.setFrom(new InternetAddress("pavan.uskcorp@gmail.com", false));

		msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse("pavan.uskcorp@gmail.com"));
		msg.setSubject("UskCorp email");
		msg.setContent("UskCorp email", "text/html");
		msg.setSentDate(new Date());

		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent("UskCorp email", "text/html");

		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);
		MimeBodyPart attachPart = new MimeBodyPart();

		attachPart.attachFile("src/main/resources/blackgoose.png");
		multipart.addBodyPart(attachPart);

		msg.setContent(multipart);
		Transport.send(msg);
	}
}
