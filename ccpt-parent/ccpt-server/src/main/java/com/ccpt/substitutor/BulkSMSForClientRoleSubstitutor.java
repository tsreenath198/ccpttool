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
public class BulkSMSForClientRoleSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public String getType() {
		return "not reachable";
	}

	@Override
	public SMS generate(SmsTemplate smsTemplate, Map<String, String> params) throws Exception {
		Integer id = Integer.parseInt(params.get("cpId"));
		ClientPosition clientPosition = clientPositionService.get(id);
		if (clientPosition != null) {
			Map<String, String> valuesMap = new HashMap<String, String>();
			valuesMap.put("role", clientPosition.getRole());
			String msg = smsTemplate.getDescription();
			String message = StrSubstitutor.replace(msg, valuesMap);
			SMS sms = new SMS();
			sms.setMessage(message);
			return sms;
		} else {
			throw new Exception("ClientPosition is null for given id:" + id);
		}
	}

	@Override
	public EmailContent generate(EmailTemplate template, Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

}
