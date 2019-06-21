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

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientMapper;
import com.ccpt.model.Client;
import com.ccpt.model.DropDownStatistics;
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
		if (model.getPhone() == null && model.getEmail() == null) {
			throw new ValidationException("Phone number and Email Both cannot be null");
		}

	}
	
	@GetMapping("/getAllClients")
	public ResponseEntity<List<DropDownStatistics>> getAllClients() {
		List<DropDownStatistics> result = clientService.getAllClients();
		return new ResponseEntity<List<DropDownStatistics>>(result, HttpStatus.OK);

	}
}