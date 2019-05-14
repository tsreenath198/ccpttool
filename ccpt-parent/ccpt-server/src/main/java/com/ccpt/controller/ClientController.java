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
import com.ccpt.model.Client;
import com.ccpt.service.IClientService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT)
public class ClientController {

	@Autowired
	private IClientService clientService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<Client>> getAllClients() {
		List<Client> clientList = clientService.getAllClients();
		return new ResponseEntity<List<Client>>(clientList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<Client> getClientById(@RequestParam Integer id) throws ResourceNotFoundException {
		Client client = clientService.getClientById(id);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addClient(@RequestBody Client client) {
		client.setActiveFlag('Y');
		client.setCreatedDate(new Date());
		client.setUpdatedDate(new Date());
		clientService.addClient(client);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<Client> updateClient(@RequestBody Client client) {
		client.setUpdatedDate(new Date());
		clientService.updateClient(client);
		return new ResponseEntity<Client>(client, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID + "/{id}")
	public ResponseEntity<Void> deleteClient(@PathVariable Integer id) throws ResourceNotFoundException {
		Client client = clientService.getClientById(id);
		client.setActiveFlag('N');
		client.setUpdatedDate(new Date());
		clientService.addClient(client);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}