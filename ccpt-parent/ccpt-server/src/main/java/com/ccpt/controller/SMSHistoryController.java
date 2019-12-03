package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.SMSDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.SMSMapper;
import com.ccpt.model.SMS;
import com.ccpt.service.BaseService;
import com.ccpt.service.SMSService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SMS_HISTORY)
public class SMSHistoryController extends BaseController<SMSDTO, SMS, Integer> {
	@Autowired
	private SMSService smsService;

	@Override
	public BaseService<SMS, Integer> getService() {
		return smsService;
	}

	@Override
	public BaseMapper<SMSDTO, SMS, Integer> getMapper() {
		return Mappers.getMapper(SMSMapper.class);
	}
}
