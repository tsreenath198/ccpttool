package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
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
import com.ccpt.service.ConsultantStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT)
public class ConsultantController extends BaseController<ConsultantDTO, Consultant, Integer> {

	@Autowired
	private ConsultantService consultantService;
	@Autowired
	private ConsultantStatusService consultantStatusService;

	@Override
	public BaseService<Consultant, Integer> getService() {
		return consultantService;
	}

	@Override
	public BaseMapper<ConsultantDTO, Consultant, Integer> getMapper() {
		return Mappers.getMapper(ConsultantMapper.class);
	}

	@SuppressWarnings("unused")
	@Override
	protected void validateAndClean(Consultant model) {

		Consultant consultantFullName = consultantService.findByFullname(model.getFullname());
		Consultant consultantEmail = consultantService.findByEmail(model.getEmail());
		Consultant consultantPhone = consultantService.findByPhone(model.getPhone());
		if (consultantFullName != null)
			throw new DataIntegrityViolationException("Consultant is already exists with this Fullname");
		else if (consultantEmail != null)
			throw new DataIntegrityViolationException("Consultant is already exists with this Email");
		else if (consultantPhone != null)
			throw new DataIntegrityViolationException("Consultant is already exists with this Phone");
		else if (consultantFullName != null && consultantEmail != null && consultantPhone != null)
			throw new DataIntegrityViolationException(
					"Consultant is already exists with this Fullname, Email and Phone");
		else if (model.getStatus().getCode() == null)
			throw new ValidationException("Consultant Status cannot be null");
		else if (model.getFullname() == null)
			throw new ValidationException("Client Name cannot be null");
		else if (model.getPhone() == null && model.getEmail() == null)
			throw new ValidationException("Phone number and Email Both cannot be null");
		else
			model.setStatus(consultantStatusService.findByCode(model.getStatus().getCode()));

	}

}
