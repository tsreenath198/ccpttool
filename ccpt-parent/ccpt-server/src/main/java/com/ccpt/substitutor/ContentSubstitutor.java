package com.ccpt.substitutor;

import java.util.Map;

import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;

public interface ContentSubstitutor {
	public String getType();

	public EmailContent generate(EmailTemplate template, Map<String, String> params);
}
