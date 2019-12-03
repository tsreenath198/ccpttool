package com.ccpt.controller;

import java.text.ParseException;
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
import com.ccpt.model.CAByStatusHelper;
import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ConsultantCallHistoryService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.REPORT)
public class ReportController {

	@Autowired
	private ClientApplicationService clientApplicationService;
	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;
	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	/*
	 * Retrieves closedApplications count and recruiter name based on given days
	 */
	@GetMapping("/getClosedCountOfAllRecruitersFromLastGivenDays")
	public ResponseEntity<Map<String, Long>> getClosedCountOfAllRecruitersFromLastGivenDays(@RequestParam Integer days)
			throws ParseException {
		Map<String, Long> map = new HashMap<>();
		List<Object[]> results = consultantCallHistoryService.getClosedCountOfAllRecruitersFromLastGivenDays(days);
		for (Object[] object : results) {
			map.put(((String) object[0]), (Long) object[1]);
		}
		return new ResponseEntity<>(map, HttpStatus.OK);
	}

	/*
	 * Retrieves list of callhistory count of recruiter to consultant based on
	 * given days
	 */
	@GetMapping("/getAllconCHCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllconCHCountByRecruiters(@RequestParam Integer days)
			throws ParseException {
		List<CallHistorySummaryStatistics> result = consultantCallHistoryService.getAllconCHCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves list of callhistory count of recruiter to client based on given
	 * days
	 */
	@GetMapping("/getAllCchCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllCchCountByRecruiters(@RequestParam Integer days)
			throws ParseException {
		List<CallHistorySummaryStatistics> result = clientCallHistoryService.getAllCchCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves all Status codes and count of generatedcode with that status
	 * code
	 */
	@GetMapping("/getAllCAbyStatus")
	public ResponseEntity<List<CAByStatusHelper>> getAllCAbyStatus() {
		List<CAByStatusHelper> result = clientApplicationService.getAllCAbyStatus();
		return new ResponseEntity<List<CAByStatusHelper>>(result, HttpStatus.OK);
	}
}
