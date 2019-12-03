package com.ccpt.controller;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DashboardCAStatistics;
import com.ccpt.model.DashboardModel;
import com.ccpt.model.InterviewSummaryStatistics;
import com.ccpt.model.PositionSummaryStatistics;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.DashboardService;
import com.ccpt.service.PaymentService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.DASHBOARD)
public class DashBoardController {
	@Autowired
	private ClientApplicationService clientApplicationService;
	@Autowired
	private ClientPositionService clientPositionService;
	@Autowired
	private DashboardService dashboardService;
	@Autowired
	private PaymentService paymentService;

	/* Retrieves list of interviews where status type is active */
	@GetMapping("/getAllInterviewsFromToday")
	public ResponseEntity<List<InterviewSummaryStatistics>> getAllInterviewsFromToday() {
		List<InterviewSummaryStatistics> result = clientApplicationService.getAllInterviewsFromToday();
		return new ResponseEntity<List<InterviewSummaryStatistics>>(result, HttpStatus.OK);
	}

	/*
	 * Retrieves last one week's list of client positions which are not in
	 * client applications
	 */
	@GetMapping("/getLastWeekDyingCP")
	public ResponseEntity<List<ClientPosition>> getLastWeekDyingCP() throws ParseException {
		List<ClientPosition> clientPositionList = clientPositionService.getLastWeekDyingCP(7);
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	/* Retrieves list of active client applications ... */
	@GetMapping("/getAllActiveCACountByCpID")
	public ResponseEntity<List<PositionSummaryStatistics>> getAllActiveCACount() {
		List<PositionSummaryStatistics> result = clientApplicationService.getAllActiveCACount();
		return new ResponseEntity<List<PositionSummaryStatistics>>(result, HttpStatus.OK);
	}

	/* Retrieves list of active client positions where status is open */
	@GetMapping("/getAllOpenCP")
	public ResponseEntity<List<ClientPosition>> getAllOpenCP() {
		List<ClientPosition> clientPositionList = clientPositionService.getAllOpenCP();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	/* Retrieves list of top 5 client positions */
	@GetMapping("/getTop5CP")
	public ResponseEntity<List<ClientPosition>> getAllClientPositions() {
		List<ClientPosition> clientPositionList = clientPositionService.getTop5ClientPositions();
		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	/* Retrieves list of client applications where status type is active */
	@GetMapping("/getDashboardCAStatistics")
	public ResponseEntity<List<DashboardCAStatistics>> getDashboardCAStatistics() {
		List<DashboardCAStatistics> result = clientApplicationService.getDashboardCAStatistics();
		return new ResponseEntity<List<DashboardCAStatistics>>(result, HttpStatus.OK);
	}

	/* Retrieves all dashboard content */
	@GetMapping("/getAllDashboardContent")
	public ResponseEntity<DashboardModel> getAllDashboardContent() throws Exception {
		DashboardModel dashboardModel = new DashboardModel();
		dashboardModel.setInterviewSummaryStatistics(clientApplicationService.getAllInterviewsFromToday());
		dashboardModel.setOpenClientPositions(dashboardService.getOpenClientPositions());
		dashboardModel.setDyingClientPositions(dashboardService.getDyingClientPositions());
		dashboardModel.setDashboardCAStatistics(clientApplicationService.getDashboardCAStatistics());
		dashboardModel.setPaymentStatistics(paymentService.get());
		return new ResponseEntity<DashboardModel>(dashboardModel, HttpStatus.OK);
	}
}
