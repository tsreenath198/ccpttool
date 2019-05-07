package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Recruiter;
import com.ccpt.repository.RecruiterRepository;

@Service
public class RecruiterService implements IRecruiterService {
	@Autowired
	private RecruiterRepository recruiterRepository;

	@Override
	public List<Recruiter> getAllRecruiters() {
		List<Recruiter> list = new ArrayList<>();
		recruiterRepository.findAllByOrderByUpdatedDateAsc().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public Recruiter getRecruiterById(int id) {
		Recruiter obj = recruiterRepository.findById(id).get();
		return obj;
	}

	@Override
	public void updateRecruiter(Recruiter recruiter) {
		recruiterRepository.save(recruiter);

	}

	@Override
	public void deleteRecruiter(int id) {
		recruiterRepository.deleteById(id);

	}

	@Override
	public boolean addRecruiter(Recruiter recruiter) {
		recruiterRepository.save(recruiter);
		return true;
	}

}
