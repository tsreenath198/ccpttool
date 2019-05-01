package com.ccpt.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.model.Recruiter;
import com.ccpt.service.IRecruiterService;

@Controller
@CrossOrigin
@RequestMapping("/recruiter")
public class RecruiterController {

	@Autowired
	private IRecruiterService recruiterService;

	@GetMapping("getAll")
	public ResponseEntity<List<Recruiter>> getAllRecruiters() {
		List<Recruiter> recruiterList = recruiterService.getAllRecruiters();

		return new ResponseEntity<List<Recruiter>>(recruiterList, HttpStatus.OK);
	}

	@GetMapping("id/{id}")
	public ResponseEntity<Recruiter> getRecruiterById(@PathVariable("id") Integer id) {
		Recruiter recruiter = recruiterService.getRecruiterById(id);
		return new ResponseEntity<Recruiter>(recruiter, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> addRecruiter(@RequestBody Recruiter recruiter) {
		recruiter.setCreatedDate(new Date());
		recruiterService.addRecruiter(recruiter);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping("update")
	public ResponseEntity<Recruiter> updateRecruiter(@RequestBody Recruiter recruiter) {
		recruiter.setUpdatedDate(new Date());
		recruiterService.updateRecruiter(recruiter);
		return new ResponseEntity<Recruiter>(recruiter, HttpStatus.OK);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteRecruiter(@PathVariable("id") Integer id) {
		recruiterService.deleteRecruiter(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
