package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.SmsTemplateDTO;
import com.ccpt.model.SmsTemplate;

@Mapper
public interface SMSTemplateMapper extends BaseMapper<SmsTemplateDTO, SmsTemplate, Integer> {

}
