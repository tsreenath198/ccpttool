package com.ccpt.controller;

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
import com.ccpt.model.Recruiter;
import com.ccpt.service.BaseService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping("/recruiter")
public class RecruiterController extends BaseController<RecruiterDTO, Recruiter, Integer> {

	@Autowired
	private RecruiterService recruiterService;

	@GetMapping("name/{name}")
	public ResponseEntity<Recruiter> getRecruiterByName(@PathVariable("name") String name) {
		Recruiter recruiter = recruiterService.getRecruiterByName(name);
		return new ResponseEntity<Recruiter>(recruiter, HttpStatus.OK);
	}

	@Override
	public BaseService<Recruiter, Integer> getService() {
		return recruiterService;
	}

	@Override
	public BaseMapper<RecruiterDTO, Recruiter, Integer> getMapper() {
		return Mappers.getMapper(RecruiterMapper.class);
	}

}
