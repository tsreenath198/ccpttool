package com.ccpt.service;

import java.util.List;

import com.ccpt.model.OtherContact;

public interface IOtherContactService {
	List<OtherContact> getAllOtherContacts();

	void addOtherContact(OtherContact otherOtherContact);

	OtherContact getOtherContactById(Integer id);

	void updateOtherContact(OtherContact otherOtherContact);

}
