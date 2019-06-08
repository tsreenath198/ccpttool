package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.OtherContact;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.OtherContactRepository;

@Service
public class OtherContactService extends BaseService<OtherContact, Integer> {
	public OtherContactService() {
		super("Other Contact");
	}

	@Autowired
	private OtherContactRepository otherContactRepository;

	@Override
	public BaseRepository<OtherContact, Integer> getRepository() {
		return otherContactRepository;
	}

}