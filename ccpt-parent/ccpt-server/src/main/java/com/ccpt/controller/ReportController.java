package com.ccpt.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.IClientCallHistoryService;
import com.ccpt.service.IConsultantCallHistoryService;

@Controller
@RequestMapping("/report")
public class ReportController {

	@Autowired
	private IConsultantCallHistoryService consultantCallHistoryService;
	@Autowired
	private IClientCallHistoryService clientCallHistoryService;

	@SuppressWarnings("rawtypes")
	@GetMapping("getAll")
	public ResponseEntity<Map<String, List>> getAllConsultantCallHistorys() {

		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorys();
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService.getAllClientCallHistorys();

		Map<String, List> map = new HashMap<>();
		map.put("consultantCallHistoryList", consultantCallHistoryList);
		map.put("clientCallHistoryList", clientCallHistoryList);

		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	/*@SuppressWarnings("rawtypes")
	@GetMapping("getAllConsultantCallHistorysFromLastGivenDays")
	public ResponseEntity<Map<String, List>> getAllConsultantCallHistorysFromLastGivenDays(@RequestParam int days) {

		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(days);
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(days);

		Map<String, List> map = new HashMap<>();
		map.put("consultantCallHistoryList", consultantCallHistoryList);
		map.put("clientCallHistoryList", clientCallHistoryList);

		return new ResponseEntity<>(map, HttpStatus.OK);
	}
*/
}
