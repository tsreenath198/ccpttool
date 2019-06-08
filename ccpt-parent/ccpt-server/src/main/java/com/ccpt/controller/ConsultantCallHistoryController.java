package com.ccpt.controller;

import javax.validation.ValidationException;

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
import com.ccpt.service.ConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_CALL_HISTORY)
public class ConsultantCallHistoryController
		extends BaseController<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> {

	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;
	@Autowired
	private ConsultantService consultantService;

	@Override
	public BaseService<ConsultantCallHistory, Integer> getService() {
		return consultantCallHistoryService;
	}

	@Override
	public BaseMapper<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> getMapper() {
		return Mappers.getMapper(ConsultantCallHistoryMapper.class);
	}

	@Override
	protected void validateAndClean(ConsultantCallHistory model) {
		if (model.getConsultant() == null || model.getConsultant().getId() == null) {
			throw new ValidationException("Consultant cannot be null");
		} else {
			model.setConsultant(consultantService.get(model.getConsultant().getId()));
		}
		if (model.getCalledDate() == null) {
			throw new ValidationException("Called Date cannot be null");
		}
	}

}
