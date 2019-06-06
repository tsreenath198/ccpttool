package com.ccpt.controller;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientMapper;
import com.ccpt.model.Client;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT)
public class ClientController extends BaseController<ClientDTO, Client, Integer> {

	@Autowired
	private ClientService clientService;

	@Override
	public BaseService<Client, Integer> getService() {
		return clientService;
	}

	@Override
	public BaseMapper<ClientDTO, Client, Integer> getMapper() {
		return Mappers.getMapper(ClientMapper.class);
	}

	@Override
	protected void validateAndClean(Client model) {
		if (model.getName() == null) {
			throw new ValidationException("Client Name cannot be null");
		}
		if (model.getPhone() == null) {
			throw new ValidationException("Phone number cannot be null");
		}

	}
}