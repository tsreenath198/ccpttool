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
import com.ccpt.model.ClientCallHistory;
import com.ccpt.service.IClientCallHistoryService;
import com.ccpt.service.IClientPositionService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_CALL_HISTORY)
public class ClientCallHistoryController {

	@Autowired
	private IClientCallHistoryService clientCallHistoryService;
	
	@Autowired
	private IClientPositionService  clientPositionService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<ClientCallHistory>> getAllClientCallHistorys() {
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService.getAllClientCallHistorys();
		
		for(ClientCallHistory cchList:clientCallHistoryList){
			cchList.setClientPositionCode(clientPositionService.getClientPositionById(cchList.getClientPositionId()).getClientPositionCode());
		}
		return new ResponseEntity<List<ClientCallHistory>>(clientCallHistoryList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<ClientCallHistory> getClientCallHistoryById(@RequestParam Integer id) {
		ClientCallHistory clientCallHistory = clientCallHistoryService.getClientCallHistoryById(id);
		return new ResponseEntity<ClientCallHistory>(clientCallHistory, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addClientCallHistory(@RequestBody ClientCallHistory clientCallHistory) {
		clientCallHistory.setCreatedDate(new Date());
		clientCallHistory.setUpdatedDate(new Date());
		clientCallHistoryService.addClientCallHistory(clientCallHistory);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<ClientCallHistory> updateClientCallHistory(@RequestBody ClientCallHistory clientCallHistory) {
		clientCallHistory.setUpdatedDate(new Date());
		clientCallHistoryService.updateClientCallHistory(clientCallHistory);
		return new ResponseEntity<ClientCallHistory>(clientCallHistory, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID+"/{id}")
	public ResponseEntity<Void> deleteClientCallHistory(@PathVariable Integer id) {
		clientCallHistoryService.deleteClientCallHistory(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
