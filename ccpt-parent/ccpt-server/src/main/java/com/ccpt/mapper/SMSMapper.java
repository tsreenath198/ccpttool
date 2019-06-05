package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.SMSDTO;
import com.ccpt.model.SMS;

@Mapper
public interface SMSMapper extends BaseMapper<SMSDTO, SMS, Integer> {

}
