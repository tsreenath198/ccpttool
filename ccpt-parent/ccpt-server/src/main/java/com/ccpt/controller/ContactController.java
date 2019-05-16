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
import com.ccpt.model.Contact;
import com.ccpt.service.IContactService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CONTACT)
public class ContactController {

	@Autowired
	private IContactService contactService;

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<Contact>> getAllContacts() {
		List<Contact> contactList = contactService.getAllContacts();
		return new ResponseEntity<List<Contact>>(contactList, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<Contact> getContactById(@RequestParam Integer id) {
		Contact contact = contactService.getContactById(id);
		return new ResponseEntity<Contact>(contact, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> addContact(@RequestBody Contact contact) {
		contact.setActiveFlag('Y');
		contact.setCreatedDate(new Date());
		contact.setUpdatedDate(new Date());
		contactService.addContact(contact);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<Contact> updateContact(@RequestBody Contact contact) {
		contact.setUpdatedDate(new Date());
		contactService.updateContact(contact);
		return new ResponseEntity<Contact>(contact, HttpStatus.OK);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID + "/{id}")
	public ResponseEntity<Void> deleteContact(@PathVariable Integer id) {
		Contact contact = contactService.getContactById(id);
		contact.setActiveFlag('N');
		contact.setUpdatedDate(new Date());
		contactService.addContact(contact);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}