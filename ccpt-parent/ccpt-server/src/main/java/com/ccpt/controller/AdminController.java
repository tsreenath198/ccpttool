package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.service.IClientApplicationStatusService;
import com.ccpt.service.IClientPositionStatusService;
import com.ccpt.service.IConsultantStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.ADMIN)
public class AdminController {

	@Autowired
	private IClientApplicationStatusService clientApplicationStatusService;
	@Autowired
	private IClientPositionStatusService clientPositionStatusService;
	@Autowired
	private IConsultantStatusService consultantStatusService;

	@PostMapping("addClientApplicationStatus")
	public ResponseEntity<Void> addClientApplicationStatus(
			@RequestBody ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatusService.addClientApplicationStatus(clientApplicationStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("getAllClientApplicationStatus")
	public ResponseEntity<List<ClientApplicationStatus>> getAllClientApplicationStatus() {
		List<ClientApplicationStatus> clientApplicationList = clientApplicationStatusService.getAllClientApplications();
		return new ResponseEntity<List<ClientApplicationStatus>>(clientApplicationList, HttpStatus.OK);
	}

	@PostMapping("addClientPositionStatus")
	public ResponseEntity<Void> addClientPositionStatus(@RequestBody ClientPositionStatus clientPositionStatus) {
		clientPositionStatusService.addClientPositionStatus(clientPositionStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("getAllClientPositionStatus")
	public ResponseEntity<List<ClientPositionStatus>> getAllClientPositionStatus() {
		List<ClientPositionStatus> clientPositionList = clientPositionStatusService.getAllClientPositionStatus();
		return new ResponseEntity<List<ClientPositionStatus>>(clientPositionList, HttpStatus.OK);
	}

	@PostMapping("addConsultantStatus")
	public ResponseEntity<Void> addConsultantStatus(@RequestBody ConsultantStatus consultantStatus) {
		consultantStatusService.addConsultantStatus(consultantStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("getAllConsultantStatus")
	public ResponseEntity<List<ConsultantStatus>> getAllConsultantStatus() {
		List<ConsultantStatus> clientPositionList = consultantStatusService.getAllConsultantStatus();
		return new ResponseEntity<List<ConsultantStatus>>(clientPositionList, HttpStatus.OK);
	}
}
