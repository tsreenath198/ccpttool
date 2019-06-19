package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
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

	@Override
	protected void validateAndClean(Consultant model) {

		List<Consultant> matchingConsultants = consultantService.find(model.getPhone(), model.getFullname(),
				model.getEmail());
		if (!CollectionUtils.isEmpty(matchingConsultants)) {
			for (Consultant entity : matchingConsultants) {
				if (!entity.getActiveFlag()) {
					throw new DataIntegrityViolationException(
							"A Inactive consultant (" + entity.getId() + ") exists with (" + entity.getFullname() + ", "
									+ entity.getEmail() + ", " + entity.getPhone() + ")");
				}
				if (model.getFullname().equals(entity.getFullname())) {
					throw new DataIntegrityViolationException(
							"Consultant(" + entity.getId() + ") is already exists with this Fullname");
				}
				if (model.getEmail() != null && model.getEmail().equals(entity.getEmail())) {
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this Email");
				}
				if (model.getPhone() != null && model.getPhone().equals(entity.getPhone())) {
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this Phone");
				}
			}
		}
		if (model.getStatus().getCode() == null)
			throw new ValidationException("Consultant Status cannot be null");
		else if (model.getFullname() == null)
			throw new ValidationException("Client Name cannot be null");
		else if (model.getPhone() == null && model.getEmail() == null)
			throw new ValidationException("Phone number and Email Both cannot be null");
		else
			model.setStatus(consultantStatusService.findByCode(model.getStatus().getCode()));

	}

}
