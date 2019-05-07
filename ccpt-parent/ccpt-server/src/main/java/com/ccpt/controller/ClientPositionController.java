package com.ccpt.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.ClientPosition;
import com.ccpt.service.IClientPositionService;
import com.ccpt.service.IClientPositionStatusService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLIENT_POSITION)
public class ClientPositionController {

	@Autowired
	private IClientPositionService clientPositionService;

	@Autowired
	private IClientPositionStatusService clientPositionStatusService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<ClientPosition>> getAllClientPositions() {
		List<ClientPosition> clientPositionList = clientPositionService.getAllClientPositions();
		
		for(ClientPosition clientPosition:clientPositionList){
			clientPosition.setClientPositionsStatus(clientPositionStatusService
					.getClientPositionStatusById(clientPosition.getClientPositionsStatusCode()).getDescription());
		}
		
		/*for (Iterator iterator = clientPositionList.iterator(); iterator.hasNext();) {
			ClientPosition clientPosition = (ClientPosition) iterator.next();
			clientPosition.setClientPositionsStatus(clientPositionStatusService
					.getClientPositionStatusById(clientPosition.getClientPositionsStatusCode()).getCode());

		}*/

		return new ResponseEntity<List<ClientPosition>>(clientPositionList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<ClientPosition> getClientPositionById(@RequestParam Integer id) {
		ClientPosition clientPosition = clientPositionService.getClientPositionById(id);
		return new ResponseEntity<ClientPosition>(clientPosition, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addClientPosition(@RequestBody ClientPosition clientPosition) {
		clientPosition.setCreatedDate(new Date());
		clientPosition.setUpdatedDate(new Date());
		clientPositionService.addClientPosition(clientPosition);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<ClientPosition> updateClientPosition(@RequestBody ClientPosition clientPosition) {
		clientPosition.setUpdatedDate(new Date());
		clientPositionService.updateClientPosition(clientPosition);
		return new ResponseEntity<ClientPosition>(clientPosition, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID)
	public ResponseEntity<Void> deleteClientPosition(@RequestParam Integer id) {
		clientPositionService.deleteClientPosition(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
