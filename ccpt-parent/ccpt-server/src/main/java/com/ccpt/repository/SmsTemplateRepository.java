package com.ccpt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.SmsTemplate;

public interface SmsTemplateRepository extends JpaRepository<SmsTemplate, Integer> {
	@Query("SELECT s FROM SmsTemplate s WHERE type=:type")
	SmsTemplate getSmsTemplateByType(@Param(value = "type") String type);
}
