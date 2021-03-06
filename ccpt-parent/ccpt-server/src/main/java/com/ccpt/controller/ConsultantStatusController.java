package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ConsultantStatusDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantStatusMapper;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.service.BaseService;
import com.ccpt.service.ConsultantStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_STATUS)
public class ConsultantStatusController extends BaseController<ConsultantStatusDTO, ConsultantStatus, Integer> {

	@Autowired
	private ConsultantStatusService consultantStatusService;

	@Override
	public BaseService<ConsultantStatus, Integer> getService() {
		return consultantStatusService;
	}

	@Override
	public BaseMapper<ConsultantStatusDTO, ConsultantStatus, Integer> getMapper() {
		return Mappers.getMapper(ConsultantStatusMapper.class);
	}

	/* Validates consultant status */
	@Override
	protected void validateAndClean(ConsultantStatus model) {
		if (model.getCode() == null)
			throw new ValidationException("Consultant Status Code cannot be null");
	}
}
