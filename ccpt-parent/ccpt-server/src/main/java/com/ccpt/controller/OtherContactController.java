package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.OtherContactDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.OtherContactMapper;
import com.ccpt.model.OtherContact;
import com.ccpt.service.BaseService;
import com.ccpt.service.OtherContactService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONTACT)
public class OtherContactController extends BaseController<OtherContactDTO, OtherContact, Integer> {

	@Autowired
	private OtherContactService otherContactService;

	@Override
	public BaseService<OtherContact, Integer> getService() {
		return otherContactService;
	}

	@Override
	public BaseMapper<OtherContactDTO, OtherContact, Integer> getMapper() {
		return Mappers.getMapper(OtherContactMapper.class);
	}

	/* Validates other contact */
	@Override
	protected void validateAndClean(OtherContact model) {
		if (model.getName() == null)
			throw new ValidationException("Name cannot be null");
		if (model.getPhone() == null)
			throw new ValidationException("Phone number cannot be null");
	}
}