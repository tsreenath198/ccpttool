package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.model.Consultant;
import com.ccpt.service.IConsultantService;

@Controller
@RequestMapping("/consultant")
public class ConsultantController {

	@Autowired
	private IConsultantService consultantService;

	@GetMapping("getAll")
	public ResponseEntity<List<Consultant>> getAllConsultants() {
		List<Consultant> consultantList = consultantService.getAllConsultants();

		return new ResponseEntity<List<Consultant>>(consultantList, HttpStatus.OK);
	}

	@GetMapping("id/{id}")
	public ResponseEntity<Consultant> getConsultantById(@PathVariable("id") Integer id) {
		Consultant consultant = consultantService.getConsultantById(id);
		return new ResponseEntity<Consultant>(consultant, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> addConsultant(@RequestBody Consultant consultant) {
		consultantService.addConsultant(consultant);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping("update")
	public ResponseEntity<Consultant> updateConsultant(@RequestBody Consultant consultant) {
		consultantService.updateConsultant(consultant);
		return new ResponseEntity<Consultant>(consultant, HttpStatus.OK);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteConsultant(@PathVariable("id") Integer id) {
		consultantService.deleteConsultant(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
