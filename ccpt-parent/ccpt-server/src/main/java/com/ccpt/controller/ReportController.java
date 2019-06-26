package com.ccpt.controller;

import java.text.ParseException;
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
import com.ccpt.model.ClientPosition;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantCallHistoryService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.REPORT)
public class ReportController {

	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	@Autowired
	private ClientPositionService clientPositionService;

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
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		Date startDate = cal.getTime();
		Date endDate = new Date();

		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryService
				.getAllConsultantCallHistorysFromLastGivenDays(startDate, endDate);

		return new ResponseEntity<List<ConsultantCallHistory>>(consultantCallHistoryList, HttpStatus.OK);
	}

	@GetMapping("getClosedCountOfAllRecruitersFromLastGivenDays")
	public ResponseEntity<Map<String, Long>> getClosedCountOfAllRecruitersFromLastGivenDays(
			@RequestParam Integer days) {
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		Date startDate = cal.getTime();
		Date endDate = new Date();
		Map<String, Long> map = new HashMap<>();
		List<Object[]> results = consultantCallHistoryService.getClosedCountOfAllRecruitersFromLastGivenDays(startDate,
				endDate);
		for (Object[] object : results) {

			map.put(((String) object[0]), (Long) object[1]);
		}
		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	@GetMapping("getTop5CP")
	public ResponseEntity<List<ClientPosition>> getAllClientPositions() {
		List<ClientPosition> clientPositionList = clientPositionService.getTop5ClientPositions();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	@GetMapping("getAllOpenCP")
	public ResponseEntity<List<ClientPosition>> getAllOpenCP() {
		List<ClientPosition> clientPositionList = clientPositionService.getAllOpenCP();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

}
