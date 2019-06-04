package com.ccpt.service;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Recruiter;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.RecruiterRepository;

@Service
public class RecruiterService extends BaseService<Recruiter, Integer> {
	@Autowired
	private RecruiterRepository recruiterRepository;

	public Recruiter getRecruiterByName(String name) {
		Recruiter obj = recruiterRepository.getRecruiterFromName(name);
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on name:: " + name);
	}

	@Override
	public BaseRepository<Recruiter, Integer> getRepository() {
		return recruiterRepository;
	}

}
