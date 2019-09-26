package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.EmailContentDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.EmailContentMapper;
import com.ccpt.model.EmailContent;
import com.ccpt.service.BaseService;
import com.ccpt.service.EmailContentService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.EMAIL_HISTORY)
public class EmailHistoryController extends BaseController<EmailContentDTO, EmailContent, Integer> {
	@Autowired
	private EmailContentService emailContentService;

	@Override
	public BaseService<EmailContent, Integer> getService() {
		return emailContentService;
	}

	@Override
	public BaseMapper<EmailContentDTO, EmailContent, Integer> getMapper() {
		return Mappers.getMapper(EmailContentMapper.class);
	}

}
