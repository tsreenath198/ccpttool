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

import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.IConsultantCallHistoryService;

@Controller
@RequestMapping("/consultantCallHistory")
public class ConsultantCallHistoryController {

	@Autowired
	private IConsultantCallHistoryService consultantCallHistoryService;

	@GetMapping("getAll")
	public ResponseEntity<List<ConsultantCallHistory>> getAllConsultantCallHistorys() {
		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorys();

		return new ResponseEntity<List<ConsultantCallHistory>>(consultantCallHistoryList, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<ConsultantCallHistory> getConsultantCallHistoryById(@PathVariable("id") Integer id) {
		ConsultantCallHistory consultantCallHistory = consultantCallHistoryService.getConsultantCallHistoryById(id);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Void> addConsultantCallHistory(@RequestBody ConsultantCallHistory consultantCallHistory,
			UriComponentsBuilder builder) {
		boolean flag = consultantCallHistoryService.addConsultantCallHistory(consultantCallHistory);
		if (flag == false) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(
				builder.path("/consultantCallHistory/{id}").buildAndExpand(consultantCallHistory.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@PutMapping("/")
	public ResponseEntity<ConsultantCallHistory> updateConsultantCallHistory(
			@RequestBody ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryService.updateConsultantCallHistory(consultantCallHistory);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<Void> deleteConsultantCallHistory(@PathVariable("id") Integer id) {
		consultantCallHistoryService.deleteConsultantCallHistory(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
