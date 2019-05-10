package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

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

	@PostMapping("cAStatus" + CCPTConstants.CREATE)
	public ResponseEntity<Void> addClientApplicationStatus(
			@RequestBody ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatus.setActiveFlag('Y');
		clientApplicationStatusService.addClientApplicationStatus(clientApplicationStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("cAStatus" + CCPTConstants.GET_ALL)
	public ResponseEntity<List<ClientApplicationStatus>> getAllClientApplicationStatus() {
		List<ClientApplicationStatus> clientApplicationList = clientApplicationStatusService.getAllClientApplications();
		return new ResponseEntity<List<ClientApplicationStatus>>(clientApplicationList, HttpStatus.OK);
	}

	@PutMapping("cAStatus" + CCPTConstants.UPDATE)
	public ResponseEntity<ClientApplicationStatus> updateClientApplicationStatus(
			@RequestBody ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatusService.updateClientApplicationStatus(clientApplicationStatus);
		return new ResponseEntity<ClientApplicationStatus>(clientApplicationStatus, HttpStatus.OK);
	}

	@DeleteMapping("cAStatus" + CCPTConstants.DELETE_BY_ID)
	public ResponseEntity<Void> deleteClientApplication(@RequestParam String code) {
		clientApplicationStatusService.deleteClientApplicationStatus(code);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@PostMapping("cPStatus" + CCPTConstants.CREATE)
	public ResponseEntity<Void> addClientPositionStatus(@RequestBody ClientPositionStatus clientPositionStatus) {
		clientPositionStatus.setActiveFlag('Y');
		clientPositionStatusService.addClientPositionStatus(clientPositionStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("cPStatus" + CCPTConstants.GET_ALL)
	public ResponseEntity<List<ClientPositionStatus>> getAllClientPositionStatus() {
		List<ClientPositionStatus> clientPositionList = clientPositionStatusService.getAllClientPositionStatus();
		return new ResponseEntity<List<ClientPositionStatus>>(clientPositionList, HttpStatus.OK);
	}

	@PutMapping("cPStatus" + CCPTConstants.UPDATE)
	public ResponseEntity<ClientPositionStatus> updateClientPositionStatus(
			@RequestBody ClientPositionStatus clientPositionStatus) {
		clientPositionStatusService.updateClientPositionStatus(clientPositionStatus);
		return new ResponseEntity<ClientPositionStatus>(clientPositionStatus, HttpStatus.OK);
	}

	@DeleteMapping("cPStatus" + CCPTConstants.DELETE_BY_ID)
	public ResponseEntity<Void> deleteClientPositionStatus(@RequestParam String code) {
		clientPositionStatusService.deleteClientPositionStatus(code);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@PostMapping("consultantStatus" + CCPTConstants.CREATE)
	public ResponseEntity<Void> addConsultantStatus(@RequestBody ConsultantStatus consultantStatus) {
		consultantStatus.setActiveFlag('Y');
		consultantStatusService.addConsultantStatus(consultantStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("consultantStatus" + CCPTConstants.GET_ALL)
	public ResponseEntity<List<ConsultantStatus>> getAllConsultantStatus() {
		List<ConsultantStatus> clientPositionList = consultantStatusService.getAllConsultantStatus();
		return new ResponseEntity<List<ConsultantStatus>>(clientPositionList, HttpStatus.OK);
	}

	@PutMapping("consultantStatus" + CCPTConstants.UPDATE)
	public ResponseEntity<ConsultantStatus> updateConsultantStatus(@RequestBody ConsultantStatus consultantStatus) {
		consultantStatusService.updateClientPositionStatus(consultantStatus);
		return new ResponseEntity<ConsultantStatus>(consultantStatus, HttpStatus.OK);
	}

	@DeleteMapping("consultantStatus" + CCPTConstants.DELETE_BY_ID)
	public ResponseEntity<Void> deleteConsultantStatus(@RequestParam String code) {
		consultantStatusService.deleteClientPositionStatus(code);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
