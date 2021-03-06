package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.dto.RecruiterDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.RecruiterMapper;
import com.ccpt.model.EmailContent;
import com.ccpt.model.Recruiter;
import com.ccpt.model.RecruiterDropdownStatistics;
import com.ccpt.service.BaseService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping("/recruiter")
public class RecruiterController extends BaseController<RecruiterDTO, Recruiter, Integer> {

	@Autowired
	private RecruiterService recruiterService;

	@Override
	public BaseService<Recruiter, Integer> getService() {
		return recruiterService;
	}

	@Override
	public BaseMapper<RecruiterDTO, Recruiter, Integer> getMapper() {
		return Mappers.getMapper(RecruiterMapper.class);
	}

	/* Retrieves Recruiter based on name */
	@GetMapping("name/{name}")
	public ResponseEntity<Recruiter> getRecruiterByName(@PathVariable("name") String name) {
		Recruiter recruiter = recruiterService.getRecruiterByName(name);
		return new ResponseEntity<Recruiter>(recruiter, HttpStatus.OK);
	}

	/*
	 * Retrieves all Recruiter name,email and count of assigned Positions of
	 * that recruiter
	 */
	@GetMapping("/getAllCreators")
	public ResponseEntity<List<RecruiterDropdownStatistics>> getAllCreators() {
		List<RecruiterDropdownStatistics> result = recruiterService.getAllCreators();
		return new ResponseEntity<List<RecruiterDropdownStatistics>>(result, HttpStatus.OK);
	}

	/* Retrieves all leadEmails of Recruiter table */
	@GetMapping("/getAllLeadEmails")
	public ResponseEntity<List<String>> getAllLeadEmails() {
		List<String> result = recruiterService.getAllLeadEmails();
		return new ResponseEntity<List<String>>(result, HttpStatus.OK);
	}

	/* Retrieves leadEmail of Recruiter table based on recruiter id */
	@GetMapping("/getLeadEmailById/{id}")
	public ResponseEntity<EmailContent> getLeadEmailById(@PathVariable("id") Integer id) {
		EmailContent emailContent = new EmailContent();
		String result = recruiterService.getLeadEmailById(id);
		emailContent.setToEmails(result);
		return new ResponseEntity<EmailContent>(emailContent, HttpStatus.OK);
	}

	/* Validates recruiter */
	@Override
	protected void validateAndClean(Recruiter model) {
		if (model.getFullname() == null)
			throw new ValidationException("Fullname cannot be null");
		if (model.getPhone() == null)
			throw new ValidationException("Phone number cannot be null");
		if (model.getEmail() == null)
			throw new ValidationException("Email cannot be null");
		if (model.getGender() == null)
			throw new ValidationException("Gender cannot be null");
		if (model.getDob() == null)
			throw new ValidationException("Date of birth cannot be null");
		if (model.getRole() == null)
			throw new ValidationException("Role cannot be null");
		if (model.getAddress() == null)
			throw new ValidationException("Address cannot be null");
	}
}
