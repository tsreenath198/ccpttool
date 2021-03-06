package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientPositionService;
import com.ccpt.util.StrSubstitutor;

@Component
public class MassMailingSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public String getType() {
		return "MassMailing";
	}

	@Override
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("cpId"));
		ClientPosition clientPosition = clientPositionService.get(id);
		if (clientPosition != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			valuesMap.put("emailid", "tsreenath1985@gmail.com");
			valuesMap.put("phone", "9848071296");
			valuesMap.put("role", clientPosition.getRole());
			valuesMap.put("joblocation", clientPosition.getLocation());
			valuesMap.put("sector", clientPosition.getClient().getIndustryType().getName());
			if (clientPosition.getDescription() != null) {
				valuesMap.put("jobDescription", clientPosition.getDescription());
			} else {
				throw new Exception("jobDescription is null for given cpid:" + id);
			}
			valuesMap.put("jobSpecification", clientPosition.getRequiredSkills());
			String templateSubject = emailTemplate.getSubject();
			String templateBody = emailTemplate.getDescription();
			String subject = StrSubstitutor.replace(templateSubject, valuesMap);
			String body = StrSubstitutor.replace(templateBody, valuesMap);
			EmailContent emailContent = new EmailContent();
			emailContent.setBody(body);
			emailContent.setSubject(subject);
			return emailContent;
		} else {
			throw new Exception("ClientPosition is null for given id:" + id);
		}
	}

	@Override
	public SMS generate(SmsTemplate template, Map<String, String> params) {
		return null;
	}

}
