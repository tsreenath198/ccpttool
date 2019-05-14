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
import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ClientApplication;
import com.ccpt.service.IClientApplicationService;
import com.ccpt.service.IClientApplicationStatusService;
import com.ccpt.service.IClientPositionService;
import com.ccpt.service.IConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION)
public class ClientApplicationController {

	@Autowired
	private IClientApplicationService clientApplicationService;

	@Autowired
	private IConsultantService consultantService;

	@Autowired
	private IClientApplicationStatusService clientApplicationStatusService;
	@Autowired
	private IClientPositionService clientPositionService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<ClientApplication>> getAllClientApplications() throws ResourceNotFoundException {
		List<ClientApplication> clientApplicationList = clientApplicationService.getAllClientApplications();

		for (ClientApplication clientApplication : clientApplicationList) {
			clientApplication.setConsultantName(
					consultantService.getConsultantById(clientApplication.getConsultantId()).getFullname());
			clientApplication.setClientApplicationStatus(clientApplicationStatusService
					.getClientApplicationStatusById(clientApplication.getClientApplicationStatusCode())
					.getDescription());
			clientApplication.setClientPositionCode(clientPositionService
					.getClientPositionById(clientApplication.getClientPositionId()).getClientPositionCode());
		}

		return new ResponseEntity<List<ClientApplication>>(clientApplicationList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<ClientApplication> getClientApplicationById(@RequestParam Integer id) throws ResourceNotFoundException {
		ClientApplication clientApplication = clientApplicationService.getClientApplicationById(id);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addClientApplication(@RequestBody ClientApplication clientApplication) {
		clientApplication.setActiveFlag('Y');
		clientApplication.setCreatedDate(new Date());
		clientApplication.setUpdatedDate(new Date());
		clientApplicationService.addClientApplication(clientApplication);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<ClientApplication> updateClientApplication(@RequestBody ClientApplication clientApplication) throws Exception {
		clientApplication.setUpdatedDate(new Date());
		clientApplicationService.updateClientApplication(clientApplication);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}


	@DeleteMapping(CCPTConstants.DELETE_BY_ID+"/{id}")
	public ResponseEntity<Void> deleteClientApplication(@PathVariable Integer id) throws ResourceNotFoundException {
		ClientApplication clientApplication = clientApplicationService.getClientApplicationById(id);
		clientApplication.setActiveFlag('N');
		clientApplication.setUpdatedDate(new Date());
		clientApplicationService.addClientApplication(clientApplication);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}
