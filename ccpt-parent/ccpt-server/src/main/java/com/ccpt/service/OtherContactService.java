package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.OtherContact;
import com.ccpt.repository.OtherContactRepository;

@Service
public class OtherContactService implements IOtherContactService {
	@Autowired
	private OtherContactRepository otherContactRepository;

	@Override
	public List<OtherContact> getAllOtherContacts() {
		List<OtherContact> list = new ArrayList<>();
		otherContactRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public void addOtherContact(OtherContact otherContact) {
		otherContactRepository.save(otherContact);
	}

	@Override
	public OtherContact getOtherContactById(Integer id) {
		OtherContact obj = otherContactRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateOtherContact(OtherContact otherContact) {
		getOtherContactById(otherContact.getId());
		otherContactRepository.save(otherContact);
	}
}