package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.CollectionUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ConsultantDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantMapper;
import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;
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

	@GetMapping("/getAllConsultants")
	public ResponseEntity<List<ConsultantStatistics>> getAllConsultants() {
		List<ConsultantStatistics> result = consultantService.getAllConsultants();
		return new ResponseEntity<List<ConsultantStatistics>>(result, HttpStatus.OK);

	}

	@GetMapping("/getInactiveConsultants")
	public ResponseEntity<List<Consultant>> getInactiveConsultants() {
		List<Consultant> result = consultantService.getInactiveConsultants();
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);

	}

	@GetMapping("/search")
	public ResponseEntity<List<Consultant>> search(@RequestParam String searchKey) {
		List<Consultant> result = consultantService.search(searchKey);
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);

	}

	@Override
	protected void validateAndClean(Consultant model) {

		List<Consultant> matchingConsultants = consultantService.find(model.getFullname(), model.getEmail(),
				model.getPhone());
		if (!CollectionUtils.isEmpty(matchingConsultants) && model.getId() == null) {
			for (Consultant entity : matchingConsultants) {
				if (!entity.getActiveFlag()) {
					throw new DataIntegrityViolationException(
							"A Inactive consultant (" + entity.getId() + ") exists with (" + entity.getFullname() + ", "
									+ entity.getEmail() + ", " + entity.getPhone() + ")");
				}
				if (model.getFullname().equals(entity.getFullname())) {
					throw new DataIntegrityViolationException(
							"Consultant(" + entity.getId() + ") is already exists with this " + entity.getFullname());
				}
				if (model.getEmail() != null && model.getEmail().equals(entity.getEmail())) {
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this " + entity.getEmail());
				}
				if (model.getPhone() != null && model.getPhone().equals(entity.getPhone())) {
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this " + entity.getPhone());
				}
			}
		}
		if (model.getStatus().getCode() == null)
			throw new ValidationException("Consultant Status cannot be null");
		else
			model.setStatus(consultantStatusService.findByCode(model.getStatus().getCode()));
		if (model.getFullname() == null)
			throw new ValidationException("Client Name cannot be null");
		if (model.getPhone() == null && model.getEmail() == null)
			throw new ValidationException("Phone number and Email Both cannot be null");

	}

}
