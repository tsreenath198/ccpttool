package com.ccpt.repository;

import com.ccpt.model.SmsTemplate;

public interface SmsTemplateRepository extends BaseRepository<SmsTemplate, Integer> {
	SmsTemplate findByType(String type);
}
