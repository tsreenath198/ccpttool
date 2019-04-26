package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.ccpt.model.ClientPosition;
import com.ccpt.service.IClientPositionService;

@Controller
@RequestMapping("/clientPosition")
public class ClientPositionController {

	@Autowired
	private IClientPositionService clientPositionService;

	@GetMapping("getAll")
	public ResponseEntity<List<ClientPosition>> getAllClientPositions() {
		List<ClientPosition> clientPositionList = clientPositionService.getAllClientPositions();

		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	@GetMapping("{id}")
	public ResponseEntity<ClientPosition> getClientPositionById(@PathVariable("id") Integer id) {
		ClientPosition clientPosition = clientPositionService.getClientPositionById(id);
		return new ResponseEntity<ClientPosition>(clientPosition, HttpStatus.OK);
	}

	@PostMapping("/")
	public ResponseEntity<Void> addClientPosition(@RequestBody ClientPosition clientPosition,
			UriComponentsBuilder builder) {
		boolean flag = clientPositionService.addClientPosition(clientPosition);
		if (flag == false) {
			return new ResponseEntity<Void>(HttpStatus.CONFLICT);
		}
		HttpHeaders headers = new HttpHeaders();
		headers.setLocation(builder.path("/clientPosition/{id}").buildAndExpand(clientPosition.getId()).toUri());
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

	@PutMapping("/")
	public ResponseEntity<ClientPosition> updateClientPosition(@RequestBody ClientPosition clientPosition) {
		clientPositionService.updateClientPosition(clientPosition);
		return new ResponseEntity<ClientPosition>(clientPosition, HttpStatus.OK);
	}

	@DeleteMapping("{id}")
	public ResponseEntity<Void> deleteClientPosition(@PathVariable("id") Integer id) {
		clientPositionService.deleteClientPosition(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
