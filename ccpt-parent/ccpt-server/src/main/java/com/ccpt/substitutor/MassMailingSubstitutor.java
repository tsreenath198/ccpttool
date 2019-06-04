package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
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
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) {
		Integer id = Integer.parseInt(params.get("cpId"));
		ClientPosition clientPosition = clientPositionService.get(id);
		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("emailid", "tsreenath1985@gmail.com");
		valuesMap.put("phone", "9848071296");
		valuesMap.put("role", clientPosition.getRole());
		valuesMap.put("joblocation", clientPosition.getLocation());
		valuesMap.put("sector", clientPosition.getClient().getIndustry());
		valuesMap.put("jobDescription", clientPosition.getDescription());
		valuesMap.put("jobSpecification", clientPosition.getRequiredSkills());

		String templateSubject = emailTemplate.getSubject();
		String templateBody = emailTemplate.getDescription();

		String subject = StrSubstitutor.replace(templateSubject, valuesMap);
		String body = StrSubstitutor.replace(templateBody, valuesMap);
		EmailContent emailContent = new EmailContent();
		emailContent.setBody(body);
		emailContent.setSubject(subject);
		return emailContent;
	}

}
