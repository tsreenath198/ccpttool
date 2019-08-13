package com.ccpt.substitutor;

import java.util.HashMap;
import java.util.Map;

import javax.validation.ValidationException;

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
public class JobDescriptionSMSSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public String getType() {
		return "JobDescription";
	}

	@Override
	public SMS generate(SmsTemplate smsTemplate, Map<String, String> params) throws Exception {
		Integer cpId = Integer.parseInt(params.get("cpId"));
		// Integer cId = Integer.parseInt(params.get("cId"));
		ClientPosition clientPosition = clientPositionService.get(cpId);
		if (clientPosition != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			if (clientPosition.getLocation() != null) {
				valuesMap.put("joblocation", clientPosition.getLocation());
				valuesMap.put("jobTitle", clientPosition.getRole());
				valuesMap.put("companyName", clientPosition.getClient().getName());
			} else {
				throw new Exception("ClientPosition Location is null");
			}
			String msg = smsTemplate.getDescription();
			String message = StrSubstitutor.replace(msg, valuesMap);
			SMS sms = new SMS();
			sms.setMessage(message);
			return sms;
		} else {
			throw new ValidationException("ClientPosition is not find for given id:" + cpId);
		}
	}

	@Override
	public EmailContent generate(EmailTemplate template, Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

}
