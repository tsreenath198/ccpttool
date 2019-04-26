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

import com.ccpt.model.ClientCallHistory;
import com.ccpt.service.IClientCallHistoryService;

@Controller
@RequestMapping("/clientCallHistory")
public class ClientCallHistoryController {

	@Autowired
	private IClientCallHistoryService clientCallHistoryService;

	@GetMapping("getAll")
	public ResponseEntity<List<ClientCallHistory>> getAllClientCallHistorys() {
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService.getAllClientCallHistorys();

		return new ResponseEntity<List<ClientCallHistory>>(clientCallHistoryList, HttpStatus.OK);
	}

	@GetMapping("id/{id}")
	public ResponseEntity<ClientCallHistory> getClientCallHistoryById(@PathVariable("id") Integer id) {
		ClientCallHistory clientCallHistory = clientCallHistoryService.getClientCallHistoryById(id);
		return new ResponseEntity<ClientCallHistory>(clientCallHistory, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> addClientCallHistory(@RequestBody ClientCallHistory clientCallHistory) {
		clientCallHistoryService.addClientCallHistory(clientCallHistory);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping("update")
	public ResponseEntity<ClientCallHistory> updateClientCallHistory(@RequestBody ClientCallHistory clientCallHistory) {
		clientCallHistoryService.updateClientCallHistory(clientCallHistory);
		return new ResponseEntity<ClientCallHistory>(clientCallHistory, HttpStatus.OK);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteClientCallHistory(@PathVariable("id") Integer id) {
		clientCallHistoryService.deleteClientCallHistory(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
