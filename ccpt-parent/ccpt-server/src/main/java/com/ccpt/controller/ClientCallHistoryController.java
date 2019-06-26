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
import com.ccpt.dto.ClientCallHistoryDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientCallHistoryMapper;
import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_CALL_HISTORY)
public class ClientCallHistoryController extends BaseController<ClientCallHistoryDTO, ClientCallHistory, Integer> {

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private RecruiterService recruiterService;

	@Override
	public BaseService<ClientCallHistory, Integer> getService() {
		return clientCallHistoryService;
	}

	@Override
	public BaseMapper<ClientCallHistoryDTO, ClientCallHistory, Integer> getMapper() {
		return Mappers.getMapper(ClientCallHistoryMapper.class);
	}

	@GetMapping("/getAllCchCountByRecruiters")
	public ResponseEntity<List<CallHistorySummaryStatistics>> getAllCchCountByRecruiters(@RequestParam Integer days) {
		List<CallHistorySummaryStatistics> result = clientCallHistoryService.getAllCchCountByRecruiters(days);
		return new ResponseEntity<List<CallHistorySummaryStatistics>>(result, HttpStatus.OK);

	}

	@GetMapping("/getAllCchByRecruiterId")
	public ResponseEntity<List<ClientCallHistory>> getAllCchByRecruiterId(@RequestParam Integer rId,
			@RequestParam Integer days) {
		List<ClientCallHistory> result = clientCallHistoryService.getAllCchByRecruiterId(rId, days);
		return new ResponseEntity<List<ClientCallHistory>>(result, HttpStatus.OK);

	}

	@Override
	protected void validateAndClean(ClientCallHistory model) {
		if (model.getClientPosition() == null || model.getClientPosition().getId() == null) {
			throw new ValidationException("Client Position cannot be null");
		} else {
			model.setClientPosition(clientPositionService.get(model.getClientPosition().getId()));
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
	}
}
