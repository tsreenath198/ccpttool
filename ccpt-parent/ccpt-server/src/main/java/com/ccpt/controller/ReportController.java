package com.ccpt.controller;

import java.text.ParseException;
import java.util.Arrays;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
import com.ccpt.service.IClientCallHistoryService;
import com.ccpt.service.IClientService;
import com.ccpt.service.IConsultantCallHistoryService;
import com.ccpt.service.IConsultantService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.REPORT)
public class ReportController {

	@Autowired
	private IConsultantCallHistoryService consultantCallHistoryService;
	@Autowired
	private IClientCallHistoryService clientCallHistoryService;

	// @Autowired
	// private IClientPositionService clientPositionService;

	@Autowired
	private IConsultantService consultantService;
	@Autowired
	private IClientService clientService;

	@SuppressWarnings("rawtypes")
	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<Map<String, List>> getAllConsultantCallHistorys() {
		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorys();
		for (ConsultantCallHistory cch : consultantCallHistoryList) {
			cch.setConsultantName(consultantService.getConsultantById(cch.getConsultantId()).getFullname());
		}
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService.getAllClientCallHistorys();
		for (ClientCallHistory cchl : clientCallHistoryList) {
			cchl.setClientName(clientService.getClientById(cchl.getClientId()).getName());
		}
		Map<String, List> map = new HashMap<>();
		map.put("consultantCallHistoryList", consultantCallHistoryList);
		map.put("clientCallHistoryList", clientCallHistoryList);
		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	@SuppressWarnings("rawtypes")
	@GetMapping("getAllCallHistorysFromLastGivenDays")
	public ResponseEntity<Map<String, List>> getAllCallHistorysFromLastGivenDays(@RequestParam int days)
			throws ParseException {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		Date startDate = cal.getTime();
		Date endDate = new Date();
		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(startDate, endDate);
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(startDate, endDate);
		for (ConsultantCallHistory cch : consultantCallHistoryList) {
			cch.setConsultantName(consultantService.getConsultantById(cch.getConsultantId()).getFullname());
		}
		for (ClientCallHistory cchl : clientCallHistoryList) {
			cchl.setClientName(clientService.getClientById(cchl.getClientId()).getName());
		}
		Map<String, List> map = new HashMap<>();
		map.put("consultantCallHistoryList", consultantCallHistoryList);
		map.put("clientCallHistoryList", clientCallHistoryList);
		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	/*@GetMapping("getClosedCountOfAllRecruitersFromLastGivenDays")
	public ResponseEntity<Map<String, Integer>> getClosedCountOfAllRecruitersFromLastGivenDays(@RequestParam int days) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		Date startDate = cal.getTime();
		Date endDate = new Date();
		Map<Object, Object> map = new HashMap<>();
		List<Object[]> results = consultantCallHistoryService.getClosedCountOfAllRecruitersFromLastGivenDays(startDate,
				endDate);
		Integer cnt=1;
		for (Object[] objects : results) {
			
			Object  o=objects;
			map.put(cnt, o);
			cnt++;
		}
		
		results.forEach(r -> System.out.println(Arrays.toString(r)));

		return new ResponseEntity<>(map, HttpStatus.OK);
	}*/

}
