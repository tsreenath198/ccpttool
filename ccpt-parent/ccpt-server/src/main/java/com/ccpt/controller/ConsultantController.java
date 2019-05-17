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
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.Consultant;
import com.ccpt.service.IConsultantService;
import com.ccpt.service.IConsultantStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT)
public class ConsultantController {

	@Autowired
	private IConsultantService consultantService;

	@Autowired
	private IConsultantStatusService consultantStatusService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<Consultant>> getAllConsultants() {
		List<Consultant> consultantList = consultantService.getAllConsultants();

		for (Consultant consultant : consultantList) {
			consultant.setConsultantStatus(consultantStatusService
					.getConsultantStatusById(consultant.getConsultantStatusCode()).getDescription());
		}
		return new ResponseEntity<List<Consultant>>(consultantList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<Consultant> getConsultantById(@RequestParam Integer id) {
		Consultant consultant = consultantService.getConsultantById(id);
		return new ResponseEntity<Consultant>(consultant, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addConsultant(@RequestBody Consultant consultant) {
		consultant.setActiveFlag('Y');
		consultant.setCreatedDate(new Date());
		consultant.setUpdatedDate(new Date());
		consultantService.addConsultant(consultant);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<Consultant> updateConsultant(@RequestBody Consultant consultant) {
		consultant.setUpdatedDate(new Date());
		consultantService.updateConsultant(consultant);
		return new ResponseEntity<Consultant>(consultant, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID + "/{id}")
	public ResponseEntity<Void> deleteConsultant(@PathVariable Integer id) {
		Consultant consultant = consultantService.getConsultantById(id);
		consultantService.deleteConsulatantRefs(consultant);
		consultant.setActiveFlag('N');
		consultant.setUpdatedDate(new Date());
		consultantService.addConsultant(consultant);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
