package com.ccpt.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.repository.ClientApplicationStatusRepository;
import com.ccpt.repository.ClientPositionStatusRepository;
import com.ccpt.repository.ConsultantStatusRepository;

@Controller
@RequestMapping("/admin")
public class AdminController {
	@Autowired
	ClientApplicationStatusRepository clientApplicationStatusRepository;
	@Autowired
	ClientPositionStatusRepository clientPositionStatusRepository;
	@Autowired
	ConsultantStatusRepository consultantStatusRepository;

	@PostMapping("/addClientApplicationStatus")
	public ResponseEntity<Void> addClientApplicationStatus(@RequestBody ClientApplicationStatus clientApplicationStatus,
			UriComponentsBuilder builder) {
		clientApplicationStatusRepository.save(clientApplicationStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PostMapping("/addClientPositionStatus")
	public ResponseEntity<Void> addClientPositionStatus(@RequestBody ClientPositionStatus clientPositionStatus,
			UriComponentsBuilder builder) {
		clientPositionStatusRepository.save(clientPositionStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PostMapping("/addConsultantStatus")
	public ResponseEntity<Void> addConsultantStatus(@RequestBody ConsultantStatus consultantStatus,
			UriComponentsBuilder builder) {
		consultantStatusRepository.save(consultantStatus);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

}
