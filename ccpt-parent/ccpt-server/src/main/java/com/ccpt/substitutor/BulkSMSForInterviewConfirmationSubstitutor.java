package com.ccpt.substitutor;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.util.StrSubstitutor;

@Component
public class BulkSMSForInterviewConfirmationSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public String getType() {
		return "ClientInterviewConfirmation";
	}

	@Override
	public SMS generate(SmsTemplate smsTemplate, Map<String, String> params) throws Exception {
		Integer caId = Integer.parseInt(params.get("caId"));
		ClientApplication clientApplication = clientApplicationService.get(caId);
		ClientPosition clientPosition = clientApplication.getClientPosition();

		if (clientPosition != null && clientApplication != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			Date date = clientApplication.getInterviewDate();
			DateFormat dateFormat = null;
			String strDate = null;
			if (date != null) {
				dateFormat = new SimpleDateFormat("dd-MM-yyyy");
				strDate = dateFormat.format(date);
			} else {
				throw new ValidationException("Client Application is not shortlisted");
			}
			if (clientApplication.getConsultant().getGender().equalsIgnoreCase("Male")) {
				valuesMap.put("salutation", "Sir");
			} else if (clientApplication.getConsultant().getGender().equalsIgnoreCase("Female")) {
				valuesMap.put("salutation", "Madam");
			}
			if (clientApplication.getConsultant().getFullname() != null) {
				valuesMap.put("consultantName", clientApplication.getConsultant().getFullname());
			}
			valuesMap.put("role", clientPosition.getRole());
			valuesMap.put("interviewDate", strDate);
			valuesMap.put("time", clientApplication.getInterviewTime());
			valuesMap.put("interviewLocation", clientApplication.getInterviewLocation());
			String msg = smsTemplate.getDescription();
			String message = StrSubstitutor.replace(msg, valuesMap);
			SMS sms = new SMS();
			sms.setMessage(message);
			return sms;
		} else {
			throw new Exception("clientAplication is null for given id:" + caId);
		}

	}

	@Override
	public EmailContent generate(EmailTemplate template, Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

}
