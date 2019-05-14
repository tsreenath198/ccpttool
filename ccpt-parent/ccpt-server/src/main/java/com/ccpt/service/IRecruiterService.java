package com.ccpt.service;

import java.util.List;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.Recruiter;

public interface IRecruiterService {

	List<Recruiter> getAllRecruiters();

	Recruiter getRecruiterById(int id) throws ResourceNotFoundException;

	boolean addRecruiter(Recruiter recruiter);

	void updateRecruiter(Recruiter recruiter);

	void deleteRecruiter(int id);

	List<Recruiter> getActiveRecruiters();
}
