package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.IndustryTypeDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.IndustryTypeMapper;
import com.ccpt.model.IndustryType;
import com.ccpt.service.BaseService;
import com.ccpt.service.IndustryTypeService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.INDUSTRY_TYPE)
public class IndustryTypeController
		extends BaseController<IndustryTypeDTO, IndustryType, Integer> {

	@Autowired
	private IndustryTypeService industryTypeService;

	@Override
	public BaseService<IndustryType, Integer> getService() {
		return industryTypeService;
	}

	@Override
	public BaseMapper<IndustryTypeDTO, IndustryType, Integer> getMapper() {
		return Mappers.getMapper(IndustryTypeMapper.class);
	}


}
