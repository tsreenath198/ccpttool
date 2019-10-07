package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.Consultant;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantService;
import com.ccpt.util.StrSubstitutor;

@Component
public class ShortlistSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private ConsultantService consultantService;

	@Override
	public String getType() {
		return "Shortlist";
	}

	@Override
	public EmailContent generate(EmailTemplate emailTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("cpId"));
		Integer cid = Integer.parseInt(params.get("consultantId"));
		ClientPosition clientPosition = clientPositionService.get(id);
		Consultant consultant = consultantService.get(cid);

		Map<String, String> valuesMap = new HashMap<String, String>();

		valuesMap.put("role", clientPosition.getRole());
		valuesMap.put("location", clientPosition.getLocation());
		if (clientPosition.getClient().getClientContacts() != null
				&& clientPosition.getClient().getClientContacts().size() <= 1) {
			valuesMap.put("contactName", clientPosition.getClient().getClientContacts().get(0).getFullname());
		} else {
			throw new Exception("client doesnot have any contact");
		}
		if (consultant.getGender() == "Male") {
			valuesMap.put("salutation", "Sir");
		} else if (consultant.getGender() == "Female") {
			valuesMap.put("salutation", "mam");
		}
		// TODO this Questions task
		valuesMap.put("noOfCandidates", "noOfCandidates");

		valuesMap.put("FullName", consultant.getFullname());
		if (consultant.getCurrentJobTitle() != null) {
			valuesMap.put("currentDesignation", consultant.getCurrentJobTitle());
		}
		if (consultant.getCurrentCompany() != null) {
			valuesMap.put("currentCompany", consultant.getCurrentCompany());
		}
		if (consultant.getCurrentCTC() != null) {
			valuesMap.put("currentCTC", consultant.getCurrentCTC().toString());
		}
		if (consultant.getExperienceYrs() != null) {
			valuesMap.put("totalExp", consultant.getExperienceYrs().toString());
		}

		String templateSubject = emailTemplate.getSubject();
		String templateBody = emailTemplate.getDescription();

		String subject = StrSubstitutor.replace(templateSubject, valuesMap);
		String body = StrSubstitutor.replace(templateBody, valuesMap);
		EmailContent emailContent = new EmailContent();
		emailContent.setBody(body);
		emailContent.setSubject(subject);
		return emailContent;
	}

	@Override
	public SMS generate(SmsTemplate template, Map<String, String> params) {
		return null;
	}

}
