package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientCallHistoryDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientCallHistoryMapper;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientCallHistoryService;
import com.ccpt.service.ClientPositionService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_CALL_HISTORY)
public class ClientCallHistoryController extends BaseController<ClientCallHistoryDTO, ClientCallHistory, Integer> {

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

	@Autowired
	private ClientPositionService clientPositionService;

	@Override
	public BaseService<ClientCallHistory, Integer> getService() {
		return clientCallHistoryService;
	}

	@Override
	public BaseMapper<ClientCallHistoryDTO, ClientCallHistory, Integer> getMapper() {
		return Mappers.getMapper(ClientCallHistoryMapper.class);
	}

	@Override
	protected void validateAndClean(ClientCallHistory model) {
		if (model.getClientPosition() == null || model.getClientPosition().getId() == null) {
			throw new ValidationException("Client Position cannot be null");
		} else {
			model.setClientPosition(clientPositionService.get(model.getClientPosition().getId()));
		}
		if (model.getCalledDate() == null) {
			throw new ValidationException("Called Date cannot be null");
		}
	}
}
