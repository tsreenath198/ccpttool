package com.ccpt.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.TemplateBean;

public interface TemplateBeanRepository extends JpaRepository<TemplateBean, Integer> {
	@Query("SELECT t FROM TemplateBean t WHERE type=:type")
	TemplateBean getTemplateByType(@Param(value = "type") String type);
}
