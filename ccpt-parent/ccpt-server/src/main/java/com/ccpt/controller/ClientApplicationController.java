package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
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
import org.springframework.web.util.UriComponentsBuilder;

import com.ccpt.model.ClientApplication;
import com.ccpt.service.IClientApplicationService;

@Controller
@RequestMapping("/clientApplication")
public class ClientApplicationController {

	@Autowired
	private IClientApplicationService clientApplicationService;

	@GetMapping("getAll")
	public ResponseEntity<List<ClientApplication>> getAllClientApplications() {
		List<ClientApplication> clientApplicationList = clientApplicationService.getAllClientApplications();

		return new ResponseEntity<List<ClientApplication>>(clientApplicationList, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<ClientApplication> getClientApplicationById(@PathVariable("id") Integer id) {
		ClientApplication clientApplication = clientApplicationService.getClientApplicationById(id);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Void> addClientApplication(@RequestBody ClientApplication clientApplication,
			UriComponentsBuilder builder) {
		boolean flag = clientApplicationService.addClientApplication(clientApplication);
		if (flag == false) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/clientApplication/{id}").buildAndExpand(clientApplication.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@PutMapping("/")
	public ResponseEntity<ClientApplication> updateClientApplication(@RequestBody ClientApplication clientApplication) {
		clientApplicationService.updateClientApplication(clientApplication);
		return new ResponseEntity<ClientApplication>(clientApplication, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<Void> deleteClientApplication(@PathVariable("id") Integer id) {
		clientApplicationService.deleteClientApplication(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
