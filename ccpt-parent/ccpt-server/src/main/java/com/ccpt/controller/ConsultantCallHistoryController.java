package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ConsultantCallHistoryDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantCallHistoryMapper;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.BaseService;
import com.ccpt.service.ConsultantCallHistoryService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_CALL_HISTORY)
public class ConsultantCallHistoryController
		extends BaseController<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> {

	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;

	@Override
	public BaseService<ConsultantCallHistory, Integer> getService() {
		return consultantCallHistoryService;
	}

	@Override
	public BaseMapper<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> getMapper() {
		return Mappers.getMapper(ConsultantCallHistoryMapper.class);
	}

}
