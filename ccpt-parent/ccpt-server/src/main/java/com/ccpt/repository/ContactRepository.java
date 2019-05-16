package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Contact;

public interface ContactRepository extends CrudRepository<Contact, Integer> {
	List<Contact> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);

	Contact findByIdAndActiveFlag(int id, Character status);
}
