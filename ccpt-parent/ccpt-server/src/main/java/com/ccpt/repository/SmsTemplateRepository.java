package com.ccpt.repository;

import java.util.Optional;

import com.ccpt.model.SmsTemplate;

public interface SmsTemplateRepository extends BaseRepository<SmsTemplate, Integer> {
	Optional<SmsTemplate> findByType(String type);
}
