package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Consultant;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantRepository;

@Service
public class ConsultantService extends BaseService<Consultant, Integer> {
	@Autowired
	private ConsultantRepository consultantRepository;

	@Override
	public BaseRepository<Consultant, Integer> getRepository() {
		return consultantRepository;
	}

}
