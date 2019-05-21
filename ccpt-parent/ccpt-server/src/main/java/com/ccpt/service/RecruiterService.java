package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

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
		recruiterRepository.findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public Recruiter getRecruiterById(int id) {
		Recruiter obj = recruiterRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateRecruiter(Recruiter recruiter) {
		getRecruiterById(recruiter.getId());
		recruiterRepository.save(recruiter);

	}

	@Override
	public void addRecruiter(Recruiter recruiter) {
		recruiterRepository.save(recruiter);
	}

	@Override
	public List<Recruiter> getActiveRecruiters() {
		List<Recruiter> list = new ArrayList<>();
		recruiterRepository.findByActiveFlagAndStatusAllIgnoreCaseOrderByCreatedDateDesc("Y", "Active")
				.forEach(e -> list.add(e));
		return list;
	}

}
