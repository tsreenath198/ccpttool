package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.EmailTemplateDTO;
import com.ccpt.model.EmailTemplate;

@Mapper
public interface EmailTemplateMapper extends BaseMapper<EmailTemplateDTO, EmailTemplate, Integer> {
}
