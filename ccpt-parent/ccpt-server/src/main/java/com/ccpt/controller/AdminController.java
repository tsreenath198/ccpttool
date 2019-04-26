package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.service.IClientApplicationStatusService;
import com.ccpt.service.IClientPositionStatusService;
import com.ccpt.service.IConsultantStatusService;

@Controller
@RequestMapping("/admin")
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

	@PostMapping("addClientPositionStatus")
	public ResponseEntity<Void> addClientPositionStatus(@RequestBody ClientPositionStatus clientPositionStatus) {
		clientPositionStatusService.addClientPositionStatus(clientPositionStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PostMapping("addClientConsultantStatus")
	public ResponseEntity<Void> addConsultantStatus(@RequestBody ConsultantStatus consultantStatus) {
		consultantStatusService.addConsultantStatus(consultantStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
