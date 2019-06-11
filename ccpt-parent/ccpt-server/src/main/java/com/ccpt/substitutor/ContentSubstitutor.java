package com.ccpt.substitutor;

import java.util.Map;

import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.SMS;
import com.ccpt.model.SmsTemplate;

public interface ContentSubstitutor {
	public String getType();

	public EmailContent generate(EmailTemplate template, Map<String, String> params) throws Exception;

	public SMS generate(SmsTemplate template, Map<String, String> params) throws Exception;

}
