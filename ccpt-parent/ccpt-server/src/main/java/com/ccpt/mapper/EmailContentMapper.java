package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.EmailContentDTO;
import com.ccpt.model.EmailContent;

@Mapper
public interface EmailContentMapper extends BaseMapper<EmailContentDTO, EmailContent, Integer> {
}
