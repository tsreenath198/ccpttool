package com.ccpt.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Properties;

import javax.mail.Authenticator;
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
import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
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
import com.ccpt.model.UploadFile;
import com.ccpt.service.EmailContentService;

@Controller
@CrossOrigin
public class EmailController {

	@Value("${spring.mail.username}")
	private String bcc;

	@Value("${spring.mail.host}")
	private String mailHost;

	@Value("${spring.mail.port}")
	private Integer port;

	@Value("${spring.mail.username}")
	private String username;

	@Value("${spring.mail.password}")
	private String password;

	@Autowired
	private JavaMailSender javaMailSender;

	@Autowired
	private EmailContentService emailContentService;

	@PostMapping(CCPTConstants.SEND_EMAIL)
	public ResponseEntity<String> sendEmail(@RequestBody EmailContent emailContent) throws Exception {
		try {
			sendEmailWithAttachments(emailContent.getToEmails(), emailContent.getSubject(), emailContent.getBody(),
					emailContent.getUploadFiles());
			emailContentService.save(emailContent);
		} catch (Exception e) {
			throw new Exception("Sending Email is Failed");
		}
		return null;
	}

	public void sendmail(String toCSV, String subject, String body) {
		SimpleMailMessage msg = new SimpleMailMessage();
		String[] split = toCSV.split(",");
		msg.setTo(split);
		msg.setSubject(subject);
		msg.setText(body);
		msg.setBcc(bcc);
		javaMailSender.send(msg);
	}

	public void sendHtmlEmail(String toAddress, String subject, String message)
			throws AddressException, MessagingException {

		// sets SMTP server properties
		Properties properties = new Properties();
		properties.put("mail.smtp.host", mailHost);
		properties.put("mail.smtp.port", port);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");

		// creates a new session with an authenticator
		Authenticator auth = new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		};

		Session session = Session.getInstance(properties, auth);

		// creates a new e-mail message
		Message msg = new MimeMessage(session);

		msg.setFrom(new InternetAddress(username));
		InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
		InternetAddress[] bccAddresses = { new InternetAddress(username) };
		msg.setRecipients(Message.RecipientType.TO, toAddresses);
		msg.setRecipients(Message.RecipientType.BCC, bccAddresses);
		msg.setSubject(subject);
		msg.setSentDate(new Date());

		// set plain text message
		msg.setContent(message, "text/html");

		// sends the e-mail
		Transport.send(msg);

	}

	void sendEmailWithAttachment(String to, String subject, String body) throws MessagingException, IOException {
		MimeMessage msg = javaMailSender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(msg, true);
		helper.setTo(to);
		helper.setSubject(subject);
		helper.setBcc(bcc);
		helper.setText(body, true);
		FileSystemResource file = new FileSystemResource(
				new File("C:\\Users\\lenovo\\Desktop\\GIT Total Commands with examples.txt.docx"));
		helper.addAttachment("GIT Total Commands with examples.txt.docx", file);
		javaMailSender.send(msg);

	}

	public void sendEmailWithAttachments(String toAddress, String subject, String message, List<UploadFile> files)
			throws AddressException, MessagingException {

		// sets SMTP server properties
		Properties properties = new Properties();
		properties.put("mail.smtp.host", mailHost);
		properties.put("mail.smtp.port", port);
		properties.put("mail.smtp.auth", "true");
		properties.put("mail.smtp.starttls.enable", "true");
		// properties.put("mail.user", username);
		// properties.put("mail.password", password);

		// creates a new session with an authenticator
		Authenticator auth = new Authenticator() {
			public PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(username, password);
			}
		};
		Session session = Session.getInstance(properties, auth);

		// creates a new e-mail message
		Message msg = new MimeMessage(session);

		msg.setFrom(new InternetAddress(username));
		// InternetAddress[] toAddresses = { new InternetAddress(toAddress) };
		String recipient = toAddress;
		String[] recipientList = recipient.split(",");
		InternetAddress[] recipientAddress = new InternetAddress[recipientList.length];
		int counter = 0;
		for (String recp : recipientList) {
			recipientAddress[counter] = new InternetAddress(recp.trim());
			counter++;
		}
		msg.setRecipients(Message.RecipientType.TO, recipientAddress);
		msg.setSubject(subject);
		msg.setSentDate(new Date());

		// creates message part
		MimeBodyPart messageBodyPart = new MimeBodyPart();
		messageBodyPart.setContent(message, "text/html");

		// creates multi-part
		Multipart multipart = new MimeMultipart();
		multipart.addBodyPart(messageBodyPart);

		// adds attachments
		List<File> tempFiles = null;
		if (files != null && files.size() > 0) {
			tempFiles = createTempFiles(files);
			for (File filePath : tempFiles) {
				MimeBodyPart attachPart = new MimeBodyPart();
				try {
					attachPart.attachFile(filePath);
				} catch (IOException ex) {
					ex.printStackTrace();
				}
				multipart.addBodyPart(attachPart);
			}
		}

		// sets the multi-part as e-mail's content
		msg.setContent(multipart);

		// sends the e-mail
		Transport.send(msg);

		if (tempFiles != null && tempFiles.size() > 0) {
			for (File file : tempFiles) {
				file.delete();
			}
		}

	}

	private List<File> createTempFiles(List<UploadFile> files) {
		List<File> tempFiles = new ArrayList<File>();
		for (UploadFile file : files) {
			tempFiles.add(createTempFile(file));
		}
		return tempFiles;
	}

	private File createTempFile(UploadFile file) {
		File f = new File(System.getProperty("java.io.tmpdir") + file.getFileName());
		try {
			OutputStream os = new FileOutputStream(f);
			os.write(file.getContent());
			System.out.println("Write bytes to file.");
			os.close();
			return f;
		} catch (Exception e) {
			e.printStackTrace();
		}
		throw new ValidationException("Unable to create temp file for : " + file.getFileName());
	}

}
