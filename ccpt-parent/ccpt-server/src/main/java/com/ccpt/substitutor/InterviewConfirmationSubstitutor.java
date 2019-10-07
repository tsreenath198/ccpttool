package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.util.StrSubstitutor;

@Component
public class InterviewConfirmationSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public String getType() {
		return "Interview Confirmation";
	}

	@Override
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("caId"));
		ClientApplication clientApplication = clientApplicationService.get(id);
		if (clientApplication != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			valuesMap.put("role", clientApplication.getClientPosition().getRole());
			valuesMap.put("location", clientApplication.getClientPosition().getLocation());

			if (clientApplication.getClientPosition().getClient().getClientContacts() != null) {
				valuesMap.put("contactName",
						clientApplication.getClientPosition().getClient().getClientContacts().get(0).getFullname());
			} else {
				throw new Exception("Client does not have any contact");
			}

			if (clientApplication.getConsultant().getGender() == "Male") {
				valuesMap.put("salutation", "Sir");
			} else if (clientApplication.getConsultant().getGender() == "Female") {
				valuesMap.put("salutation", "mam");
			}
			if (clientApplication.getInterviewDate() != null) {
				valuesMap.put("interviewDate", clientApplication.getInterviewDate().toString());
			} else {
				throw new Exception("interviewDate is null in clientApplication");
			}
			if (clientApplication.getInterviewTime() != null) {
				valuesMap.put("Time", clientApplication.getInterviewTime());
			} else {
				throw new Exception("interviewTime is null in clientApplication");
			}
			if (clientApplication.getInterviewMode() != null) {
				valuesMap.put("Mode", clientApplication.getInterviewMode());
			} else {
				throw new Exception("interviewMode is null in clientApplication");
			}

			valuesMap.put("consultantName", clientApplication.getConsultant().getFullname());
			String templateSubject = emailTemplate.getSubject();
			String templateBody = emailTemplate.getDescription();
			String subject = StrSubstitutor.replace(templateSubject, valuesMap);
			String body = StrSubstitutor.replace(templateBody, valuesMap);
			EmailContent emailContent = new EmailContent();
			emailContent.setBody(body);
			emailContent.setSubject(subject);
			return emailContent;
		} else {
			throw new Exception("ClientApplication is null for given id:" + id);
		}
	}

	@Override
	public SMS generate(SmsTemplate template, Map<String, String> params) {
		return null;
	}

}
