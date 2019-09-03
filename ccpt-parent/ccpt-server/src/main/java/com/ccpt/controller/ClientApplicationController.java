package com.ccpt.controller;

import java.util.List;

import javax.persistence.EntityExistsException;
import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.ClientApplicationDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.ClientApplicationMapper;
import com.ccpt.model.ApplicationBody;
import com.ccpt.model.CAStatistics;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.DashboardCAStatistics;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.ClientApplicationStatusService;
import com.ccpt.service.ClientPositionService;
import com.ccpt.service.ConsultantService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_APPLICATION)
public class ClientApplicationController extends BaseController<ClientApplicationDTO, ClientApplication, Integer> {

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private RecruiterService recruiterService;

	@Autowired
	private ConsultantService consultantService;

	@Autowired
	private ClientApplicationStatusService clientApplicationStatusService;

	@Override
	public BaseService<ClientApplication, Integer> getService() {
		return clientApplicationService;
	}

	@Override
	public BaseMapper<ClientApplicationDTO, ClientApplication, Integer> getMapper() {
		return Mappers.getMapper(ClientApplicationMapper.class);
	}

	@GetMapping("/getAllActiveCAByCpID")
	public ResponseEntity<List<ClientApplication>> getAllActiveCAByCpID(@RequestParam Integer cpId) {
		List<ClientApplication> result = clientApplicationService.getAllActiveCAByCpID(cpId);
		return new ResponseEntity<List<ClientApplication>>(result, HttpStatus.OK);

	}

	@GetMapping("/showBodyMail")
	public ResponseEntity<ApplicationBody> showBodyMail(@RequestParam Integer caId) {
		ApplicationBody result = clientApplicationService.showBodyMail(caId);
		return new ResponseEntity<ApplicationBody>(result, HttpStatus.OK);

	}

	@GetMapping("/getJobConfirmedCAs")
	public ResponseEntity<List<CAStatistics>> getJobConfirmedCAs() {
		List<CAStatistics> result = clientApplicationService.getJobConfirmedCAs();
		return new ResponseEntity<List<CAStatistics>>(result, HttpStatus.OK);

	}

	@GetMapping("/getCAStatistics")
	public ResponseEntity<List<CAStatistics>> getCAStatistics() {
		List<CAStatistics> result = clientApplicationService.getCAStatistics();
		return new ResponseEntity<List<CAStatistics>>(result, HttpStatus.OK);

	}

	@GetMapping("/search")
	public ResponseEntity<List<ClientApplication>> search(@RequestParam Integer clientId) {
		List<ClientApplication> result = clientApplicationService.search(clientId);
		return new ResponseEntity<List<ClientApplication>>(result, HttpStatus.OK);

	}

	@GetMapping("/dashboardCAStatistics")
	public ResponseEntity<List<DashboardCAStatistics>> getDashboardCAStatistics() {
		List<DashboardCAStatistics> result = clientApplicationService.getDashboardCAStatistics();
		return new ResponseEntity<List<DashboardCAStatistics>>(result, HttpStatus.OK);

	}

	@PutMapping("/updateStatus")
	public ResponseEntity<Void> updateStatus(@RequestParam Integer id, @RequestParam String status) {
		clientApplicationService.updateStatus(id, status);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@Override
	protected void validateAndClean(ClientApplication model) {
		if (model.getClientPosition() == null || model.getClientPosition().getId() == null) {
			throw new ValidationException("Client Position cannot be null");
		} else {
			model.setClientPosition(clientPositionService.get(model.getClientPosition().getId()));
		}
		if (model.getConsultant() == null || model.getConsultant().getId() == null) {
			throw new ValidationException("Consultant cannot be null");
		} else {
			model.setConsultant(consultantService.get(model.getConsultant().getId()));
		}
		if (model.getCreator() == null || model.getCreator().getId() == null) {
			throw new ValidationException("Application Creator cannot be null");
		} else {
			model.setCreator(recruiterService.get(model.getCreator().getId()));
		}
		if (model.getStatus() == null || model.getStatus().getCode() == null) {
			throw new ValidationException("Application Status cannot be null");
		} else {
			model.setStatus(clientApplicationStatusService.findByCode(model.getStatus().getCode()));
		}
		if (model.getId() == null) {
			Integer check = clientApplicationService.checkPositionWithConsultant(model.getClientPosition().getId(),
					model.getConsultant().getId());
			if (check >= 1) {
				throw new EntityExistsException(
						"Client Application is already exist with this consultant and client position");
			}
		}
	}

}
