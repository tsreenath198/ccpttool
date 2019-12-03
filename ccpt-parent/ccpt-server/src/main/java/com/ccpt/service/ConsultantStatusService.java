package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ConsultantStatus;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantStatusRepository;

@Service
public class ConsultantStatusService extends BaseService<ConsultantStatus, Integer> {
	@Autowired
	private ConsultantStatusRepository consultantStatusRepository;

	public ConsultantStatusService() {
		super("Consultant Status");
	}

	@Override
	public BaseRepository<ConsultantStatus, Integer> getRepository() {
		return consultantStatusRepository;
	}

	public ConsultantStatus findByCode(String code) {
		return consultantStatusRepository.findByCodeAndActiveFlag(code, true);
	}
}
