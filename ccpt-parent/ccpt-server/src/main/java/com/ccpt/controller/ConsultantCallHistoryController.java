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

	@GetMapping("id/{id}")
	public ResponseEntity<ConsultantCallHistory> getConsultantCallHistoryById(@PathVariable("id") Integer id) {
		ConsultantCallHistory consultantCallHistory = consultantCallHistoryService.getConsultantCallHistoryById(id);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> addConsultantCallHistory(@RequestBody ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryService.addConsultantCallHistory(consultantCallHistory);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping("update")
	public ResponseEntity<ConsultantCallHistory> updateConsultantCallHistory(
			@RequestBody ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryService.updateConsultantCallHistory(consultantCallHistory);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteConsultantCallHistory(@PathVariable("id") Integer id) {
		consultantCallHistoryService.deleteConsultantCallHistory(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
