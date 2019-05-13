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
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.IConsultantCallHistoryService;
import com.ccpt.service.IConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_CALL_HISTORY)
public class ConsultantCallHistoryController {

	@Autowired
	private IConsultantCallHistoryService consultantCallHistoryService;
	
	@Autowired
	private IConsultantService consultantService;

	@GetMapping("getAll")
	public ResponseEntity<List<ConsultantCallHistory>> getAllConsultantCallHistorys() {
		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorys();
		for (ConsultantCallHistory cch : consultantCallHistoryList) {
			cch.setConsultantName(consultantService.getConsultantById(cch.getConsultantId()).getFullname());
		}
		return new ResponseEntity<List<ConsultantCallHistory>>(consultantCallHistoryList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<ConsultantCallHistory> getConsultantCallHistoryById(@RequestParam Integer id) {
		ConsultantCallHistory consultantCallHistory = consultantCallHistoryService.getConsultantCallHistoryById(id);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addConsultantCallHistory(@RequestBody ConsultantCallHistory consultantCallHistory) {
		consultantCallHistory.setCreatedDate(new Date());
		consultantCallHistory.setUpdatedDate(new Date());
		consultantCallHistoryService.addConsultantCallHistory(consultantCallHistory);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<ConsultantCallHistory> updateConsultantCallHistory(
			@RequestBody ConsultantCallHistory consultantCallHistory) {
		consultantCallHistory.setUpdatedDate(new Date());
		consultantCallHistoryService.updateConsultantCallHistory(consultantCallHistory);
		return new ResponseEntity<ConsultantCallHistory>(consultantCallHistory, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID+"/{id}")
	public ResponseEntity<Void> deleteConsultantCallHistory(@PathVariable Integer id) {
		consultantCallHistoryService.deleteConsultantCallHistory(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}
