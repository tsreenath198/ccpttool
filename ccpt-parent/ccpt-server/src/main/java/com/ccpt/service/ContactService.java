package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Contact;
import com.ccpt.repository.ContactRepository;

@Service
public class ContactService implements IContactService {
	@Autowired
	private ContactRepository contactRepository;

	@Override
	public List<Contact> getAllContacts() {
		List<Contact> list = new ArrayList<>();
		contactRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public void addContact(Contact contact) {
		contactRepository.save(contact);
	}

	@Override
	public Contact getContactById(Integer id) {
		Contact obj = contactRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateContact(Contact contact) {
		getContactById(contact.getId());
		contactRepository.save(contact);
	}
}