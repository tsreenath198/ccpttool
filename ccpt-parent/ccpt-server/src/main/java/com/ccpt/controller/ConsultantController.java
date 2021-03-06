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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.AdvanceSearchDto;
import com.ccpt.dto.ConsultantDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantMapper;
import com.ccpt.model.BaseReturn;
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

	@GetMapping("/getAll")
	public ResponseEntity<List<Consultant>> getAll() {
		List<Consultant> result = (List<Consultant>) consultantService.getAll();
		for (Consultant consultant : result) {
			String month = "0";
			String year = "0";
			if (consultant.getExperienceMonths() != null && !consultant.getExperienceMonths().isEmpty())
				month = consultant.getExperienceMonths().replaceAll("[^\\d.]", "");
			consultant.setExpMonths(Integer.parseInt(month));
			if (consultant.getExperienceYrs() != null && !consultant.getExperienceYrs().isEmpty())
				year = consultant.getExperienceYrs().replaceAll("[^\\d.]", "");
			consultant.setExpYrs(Integer.parseInt(year));
			consultantService.save(consultant);
		}
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);
	}

	/* Retrieves all active consultants with status code inactive */
	@GetMapping("/getAllConsultants")
	public ResponseEntity<List<ConsultantStatistics>> getAllConsultants() {
		List<ConsultantStatistics> result = consultantService.getAllConsultants();
		return new ResponseEntity<List<ConsultantStatistics>>(result, HttpStatus.OK);
	}

	/* Retrieves inactive consultants */
	@GetMapping("/getInactiveConsultants")
	public ResponseEntity<List<Consultant>> getInactiveConsultants() {
		List<Consultant> result = consultantService.getInactiveConsultants();
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);
	}

	/* Retrieves list of consultants based on the search key */
	@GetMapping("/search")
	public ResponseEntity<List<Consultant>> search(@RequestParam String searchKey) {
		List<Consultant> result = consultantService.search(searchKey);
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);
	}

	@PostMapping("/advanceSearch")
	public ResponseEntity<List<Consultant>> advanceSearch(@RequestBody AdvanceSearchDto dto) {
		List<Consultant> result = consultantService.findConsultant(dto);
		return new ResponseEntity<List<Consultant>>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves number of records and the list of consultants based on the
	 * status type
	 */
	@GetMapping(CCPTConstants.GET_ALL_BY_STATUS)
	public ResponseEntity<BaseReturn> getAllByStatus(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "50") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy,
			@RequestParam(required = false) String status) {
		BaseReturn br = consultantService.getAllByStatus(pageNo, pageSize, sortBy, status);
		return new ResponseEntity<BaseReturn>(br, HttpStatus.OK);
	}

	/* Validates consultant */
	@Override
	protected void validateAndClean(Consultant model) {
		List<Consultant> matchingConsultants = consultantService.find(model.getFullname(), model.getEmail(),
				model.getPhone());
		if (!CollectionUtils.isEmpty(matchingConsultants) && model.getId() == null) {
			for (Consultant entity : matchingConsultants) {
				if (!entity.getActiveFlag())
					throw new DataIntegrityViolationException(
							"A Inactive consultant (" + entity.getId() + ") exists with (" + entity.getFullname() + ", "
									+ entity.getEmail() + ", " + entity.getPhone() + ")");
				if (model.getFullname().equals(entity.getFullname()))
					throw new DataIntegrityViolationException(
							"Consultant(" + entity.getId() + ") is already exists with this " + entity.getFullname());
				if (model.getEmail() != null && model.getEmail().equals(entity.getEmail()))
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this " + entity.getEmail());
				if (model.getPhone() != null && model.getPhone().equals(entity.getPhone()))
					throw new DataIntegrityViolationException(
							"Consultant (" + entity.getId() + ")  is already exists with this " + entity.getPhone());
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
		if (model.getExperienceYrs() != null && !model.getExperienceYrs().isEmpty()) {
			String year = model.getExperienceYrs().replaceAll("[^\\d.]", "");
			model.setExpYrs(Integer.parseInt(year));
		}
		if (model.getExperienceMonths() != null && !model.getExperienceMonths().isEmpty()) {
			String month = model.getExperienceMonths().replaceAll("[^\\d.]", "");
			model.setExpMonths(Integer.parseInt(month));
		}

	}
}
