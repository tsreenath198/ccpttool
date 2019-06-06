package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ConsultantDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantMapper;
import com.ccpt.model.Consultant;
import com.ccpt.service.BaseService;
import com.ccpt.service.ConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT)
public class ConsultantController extends BaseController<ConsultantDTO, Consultant, Integer> {

	@Autowired
	private ConsultantService consultantService;

	@Override
	public BaseService<Consultant, Integer> getService() {
		return consultantService;
	}

	@Override
	public BaseMapper<ConsultantDTO, Consultant, Integer> getMapper() {
		return Mappers.getMapper(ConsultantMapper.class);
	}

	@Override
	protected void validateAndClean(Consultant model) {
		if (model.getStatus().getCode() == null) {
			throw new ValidationException("Consultant Status cannot be null");
		}
	}

}
