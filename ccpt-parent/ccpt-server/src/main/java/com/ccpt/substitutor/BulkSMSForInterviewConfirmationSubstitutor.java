package com.ccpt.substitutor;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.util.StrSubstitutor;

@Component
public  class BulkSMSForInterviewConfirmationSubstitutor implements ContentSubstitutor {

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public String getType() {
		return "consultant";
	}

	@Override
	public SMS generate(SmsTemplate smsTemplate, Map<String, String> params) {
		Integer cpId = Integer.parseInt(params.get("cpId"));
		Integer caId = Integer.parseInt(params.get("caId"));
		ClientPosition clientPosition = clientPositionService.get(cpId);
		ClientApplication clientApplication = clientApplicationService.get(caId);
		Map<String, String> valuesMap = new HashMap<String, String>();
		Date date = clientApplication.getInterviewDate();
		DateFormat dateFormat = new SimpleDateFormat("yyyy-mm-dd hh:mm:ss");
		String strDate = dateFormat.format(date);
		valuesMap.put("role", clientPosition.getRole());
		valuesMap.put("interviewDate", strDate);
		valuesMap.put("time", clientApplication.getInterviewTime());
		valuesMap.put("interviewLocation", clientApplication.getInterviewLocation());
		String msg= smsTemplate.getDescription();
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
