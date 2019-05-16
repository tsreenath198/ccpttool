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
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.OtherContact;
import com.ccpt.service.IOtherContactService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONTACT)
public class OtherContactController {

	@Autowired
	private IOtherContactService otherContactService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<OtherContact>> getAllOtherContacts() {
		List<OtherContact> otherContactList = otherContactService.getAllOtherContacts();
		return new ResponseEntity<List<OtherContact>>(otherContactList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<OtherContact> getOtherContactById(@RequestParam Integer id) {
		OtherContact otherContact = otherContactService.getOtherContactById(id);
		return new ResponseEntity<OtherContact>(otherContact, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addOtherContact(@RequestBody OtherContact otherContact) {
		otherContact.setActiveFlag('Y');
		otherContact.setCreatedDate(new Date());
		otherContact.setUpdatedDate(new Date());
		otherContactService.addOtherContact(otherContact);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<OtherContact> updateOtherContact(@RequestBody OtherContact otherContact) {
		otherContact.setUpdatedDate(new Date());
		otherContactService.updateOtherContact(otherContact);
		return new ResponseEntity<OtherContact>(otherContact, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID + "/{id}")
	public ResponseEntity<Void> deleteOtherContact(@PathVariable Integer id) {
		OtherContact otherContact = otherContactService.getOtherContactById(id);
		otherContact.setActiveFlag('N');
		otherContact.setUpdatedDate(new Date());
		otherContactService.addOtherContact(otherContact);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}