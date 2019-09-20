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
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DashboardCAStatistics;
import com.ccpt.model.DashboardModel;
import com.ccpt.model.InterviewSummaryStatistics;
import com.ccpt.model.PositionSummaryStatistics;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantCallHistoryService;
import com.ccpt.service.DashboardService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.DASHBOARD)
public class DashBoardController {
	@Autowired
	private ClientApplicationService clientApplicationService;
	@Autowired
	private ClientPositionService clientPositionService;
	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;
	@Autowired
	private ClientCallHistoryService clientCallHistoryService;
	@Autowired
	private DashboardService dashboardService;

	@GetMapping("/getAllInterviewsFromToday")
	public ResponseEntity<List<InterviewSummaryStatistics>> getAllInterviewsFromToday() {
		List<InterviewSummaryStatistics> result = clientApplicationService.getAllInterviewsFromToday();
		return new ResponseEntity<List<InterviewSummaryStatistics>>(result, HttpStatus.OK);
	}

	@GetMapping("/getAllCAbyStatus")
	public ResponseEntity<List<CAByStatusHelper>> getAllCAbyStatus() {
		List<CAByStatusHelper> result = clientApplicationService.getAllCAbyStatus();
		return new ResponseEntity<List<CAByStatusHelper>>(result, HttpStatus.OK);
	}

	@GetMapping("/getLastWeekDyingCP")
	public ResponseEntity<List<ClientPosition>> getLastWeekDyingCP() throws ParseException {
		List<ClientPosition> clientPositionList = clientPositionService.getLastWeekDyingCP(7);
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	@GetMapping("/getAllActiveCACountByCpID")
	public ResponseEntity<List<PositionSummaryStatistics>> getAllActiveCACount() {
		List<PositionSummaryStatistics> result = clientApplicationService.getAllActiveCACount();
		return new ResponseEntity<List<PositionSummaryStatistics>>(result, HttpStatus.OK);
	}

	@GetMapping("/getAllOpenCP")
	public ResponseEntity<List<ClientPosition>> getAllOpenCP() {
		List<ClientPosition> clientPositionList = clientPositionService.getAllOpenCP();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

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

	@GetMapping("/getAllconCHCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllconCHCountByRecruiters(@RequestParam Integer days)
			throws ParseException {
		List<CallHistorySummaryStatistics> result = consultantCallHistoryService.getAllconCHCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);
	}

	@GetMapping("/getTop5CP")
	public ResponseEntity<List<ClientPosition>> getAllClientPositions() {
		List<ClientPosition> clientPositionList = clientPositionService.getTop5ClientPositions();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	@GetMapping("/getAllCchCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllCchCountByRecruiters(@RequestParam Integer days)
			throws ParseException {
		List<CallHistorySummaryStatistics> result = clientCallHistoryService.getAllCchCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);
	}

	@GetMapping("/getDashboardCAStatistics")
	public List<DashboardCAStatistics> getDashboardCAStatistics() {
		return clientApplicationService.getDashboardCAStatistics();
	}

	@GetMapping("/getAllDashboardContent")
	public ResponseEntity<DashboardModel> getAllDashboardContent() throws Exception {
		DashboardModel dashboardModel = new DashboardModel();
		dashboardModel.setInterviewSummaryStatistics(clientApplicationService.getAllInterviewsFromToday());
		dashboardModel.setOpenClientPositions(dashboardService.getOpenClientPositions());
		dashboardModel.setDyingClientPositions(dashboardService.getDyingClientPositions());
		dashboardModel.setCaByStatusList(clientApplicationService.getAllCAbyStatus());
		dashboardModel.setClientCallHistoryList(clientCallHistoryService.getAllCchCountByRecruiters(7));
		dashboardModel.setConsultantCallHistoryList(consultantCallHistoryService.getAllconCHCountByRecruiters(7));
		dashboardModel.setDashboardCAStatistics(clientApplicationService.getDashboardCAStatistics());
		return new ResponseEntity<DashboardModel>(dashboardModel, HttpStatus.OK);
	}

}
