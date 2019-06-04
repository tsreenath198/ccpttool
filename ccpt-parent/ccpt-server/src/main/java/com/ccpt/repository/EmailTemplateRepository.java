package com.ccpt.repository;

import java.util.Optional;

import com.ccpt.model.EmailTemplate;

public interface EmailTemplateRepository extends BaseRepository<EmailTemplate, Integer> {
	Optional<EmailTemplate> findByType(String type);
}
