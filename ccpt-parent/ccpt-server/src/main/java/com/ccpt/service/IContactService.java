package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Contact;

public interface IContactService {
	List<Contact> getAllContacts();

	void addContact(Contact contact);

	Contact getContactById(Integer id);

	void updateContact(Contact contact);

}
