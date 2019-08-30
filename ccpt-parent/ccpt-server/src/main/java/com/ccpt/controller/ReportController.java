package com.ccpt.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ConsultantCallHistoryService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.REPORT)
public class ReportController {

	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	@Value("${cp.dying.days}")
	private Integer days;

	@GetMapping("getAllClientCallHistorysByDays")
	public ResponseEntity<List<ClientCallHistory>> getAllClientCallHistorysByDays(@RequestParam Integer days)
			throws ParseException {
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService
				.getAllClientCallHistorysFromLastGivenDays(days);

		return new ResponseEntity<List<ClientCallHistory>>(clientCallHistoryList, HttpStatus.OK);
	}

	@GetMapping("getAllConsultantCallHistorysByDays")
	public ResponseEntity<List<ConsultantCallHistory>> getAllConsultantCallHistorysByDays(@RequestParam Integer days)
			throws ParseException {

		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(days);

		return new ResponseEntity<List<ConsultantCallHistory>>(consultantCallHistoryList, HttpStatus.OK);
	}

}
