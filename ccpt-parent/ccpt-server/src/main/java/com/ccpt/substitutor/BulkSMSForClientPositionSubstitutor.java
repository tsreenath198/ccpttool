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
public  class BulkSMSForClientPositionSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public String getType() {
		return "send job";
	}

	@Override
	public SMS generate(SmsTemplate smsTemplate, Map<String, String> params) {
		Integer id = Integer.parseInt(params.get("cpId"));
		ClientPosition clientPosition = clientPositionService.get(id);
		Map<String, String> valuesMap = new HashMap<String, String>();
		valuesMap.put("joblocation", clientPosition.getLocation());
		valuesMap.put("client", clientPosition.getClient().getName());
		valuesMap.put("job", clientPosition.getRole());
		String msg = smsTemplate.getDescription();
		String message = StrSubstitutor.replace(msg, valuesMap);
		SMS sms = new SMS();
		sms.setMessage(message);
		return sms;
	}

	@Override
	public EmailContent generate(EmailTemplate template, Map<String, String> params) {
		// TODO Auto-generated method stub
		return null;
	}

}
