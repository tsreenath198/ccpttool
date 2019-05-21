package com.ccpt.config;

import java.util.Properties;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.JavaMailSenderImpl;

import com.ccpt.model.TemplateBean;
import com.ccpt.repository.TemplateBeanRepository;

@Configuration
public class AppConfig {

	@Autowired
	private TemplateBeanRepository templateBeanRepository;

	@Bean
	public JavaMailSender getJavaMailSender() {
		JavaMailSenderImpl mailSender = new JavaMailSenderImpl();
		mailSender.setHost("smtp.gmail.com");
		mailSender.setPort(587);

		mailSender.setUsername("pavan.uskcorp@gmail.com");
		mailSender.setPassword("prasanna7761");

		Properties props = mailSender.getJavaMailProperties();
		props.put("mail.transport.protocol", "smtp");
		props.put("mail.smtp.auth", "true");
		props.put("mail.smtp.starttls.enable", "true");
		props.put("mail.debug", "true");

		return mailSender;
	}

	@Bean
	public SimpleMailMessage templateSimpleMessage() {
		SimpleMailMessage message = new SimpleMailMessage();
		TemplateBean templateBean = templateBeanRepository.findById(1).get();

		String templateSubject = templateBean.getSubject();
		String templateBody = templateBean.getBody();
		message.setSubject(templateSubject);
		message.setText(templateBody);
		return message;
	}

}