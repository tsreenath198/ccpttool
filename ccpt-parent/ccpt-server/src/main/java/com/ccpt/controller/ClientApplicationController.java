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

import com.ccpt.model.ClientApplication;
import com.ccpt.service.IClientApplicationService;

@Controller
@CrossOrigin
@RequestMapping("/clientApplication")
public class ClientApplicationController {

	@Autowired
	private IClientApplicationService clientApplicationService;

	@GetMapping("getAll")
	public ResponseEntity<List<ClientApplication>> getAllClientApplications() {
		List<ClientApplication> clientApplicationList = clientApplicationService.getAllClientApplications();

		return new ResponseEntity<List<ClientApplication>>(clientApplicationList, HttpStatus.OK);
	}

	@GetMapping("id/{id}")
	public ResponseEntity<ClientApplication> getClientApplicationById(@PathVariable("id") Integer id) {
		ClientApplication clientApplication = clientApplicationService.getClientApplicationById(id);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> addClientApplication(@RequestBody ClientApplication clientApplication) {
		clientApplication.setCreatedDate(new Date());
		clientApplicationService.addClientApplication(clientApplication);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping("update")
	public ResponseEntity<ClientApplication> updateClientApplication(@RequestBody ClientApplication clientApplication) {
		clientApplication.setUpdatedDate(new Date());
		clientApplicationService.updateClientApplication(clientApplication);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteClientApplication(@PathVariable("id") Integer id) {
		clientApplicationService.deleteClientApplication(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
