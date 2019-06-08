package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ConsultantStatus;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantStatusRepository;

@Service
public class ConsultantStatusService extends BaseService<ConsultantStatus, String> {
	public ConsultantStatusService() {
		super("Consultant Status");
	}

	@Autowired
	private ConsultantStatusRepository consultantStatusRepository;

	@Override
	public BaseRepository<ConsultantStatus, String> getRepository() {
		return consultantStatusRepository;
	}

}
