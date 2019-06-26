package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ConsultantCallHistoryDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ConsultantCallHistoryMapper;
import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantCallHistoryService;
import com.ccpt.service.ConsultantService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONSULTANT_CALL_HISTORY)
public class ConsultantCallHistoryController
		extends BaseController<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> {

	@Autowired
	private ConsultantCallHistoryService consultantCallHistoryService;

	@Autowired
	private ConsultantService consultantService;

	@Autowired
	private RecruiterService recruiterService;

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public BaseService<ConsultantCallHistory, Integer> getService() {
		return consultantCallHistoryService;
	}

	@Override
	public BaseMapper<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> getMapper() {
		return Mappers.getMapper(ConsultantCallHistoryMapper.class);
	}

	@GetMapping("/getAllconCHCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllconCHCountByRecruiters(@RequestParam Integer days) {
		List<CallHistorySummaryStatistics> result = consultantCallHistoryService.getAllconCHCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);

	}

	@GetMapping("/getAllconCHByRecruiterId")
	public ResponseEntity<List<ConsultantCallHistory>> getAllconCHByRecruiterId(@RequestParam Integer rId,
			@RequestParam Integer days) {
		List<ConsultantCallHistory> result = consultantCallHistoryService.getAllconCHByRecruiterId(rId, days);
		return new ResponseEntity<List<ConsultantCallHistory>>(result, HttpStatus.OK);

	}

	@Override
	protected void validateAndClean(ConsultantCallHistory model) {
		if (model.getConsultant() == null || model.getConsultant().getId() == null) {
			throw new ValidationException("Consultant cannot be null");
		} else {
			model.setConsultant(consultantService.get(model.getConsultant().getId()));
		}
		if (model.getCalledBy() == null || model.getCalledBy().getId() == null) {
			throw new ValidationException("Called By cannot be null");
		} else {
			model.setCalledBy(recruiterService.get(model.getCalledBy().getId()));
		}
		if (model.getCalledDate() == null) {
			throw new ValidationException("Called Date cannot be null");
		}
		if (model.getDescription() == null || model.getDescription().isEmpty()) {
			throw new ValidationException("Description cannot be null");
		}
		if (model.getClientPosition() == null || model.getClientPosition().getId() == null) {
			throw new ValidationException("Client Position cannot be null");
		} else {
			model.setClientPosition(clientPositionService.get(model.getClientPosition().getId()));
		}
	}

}
