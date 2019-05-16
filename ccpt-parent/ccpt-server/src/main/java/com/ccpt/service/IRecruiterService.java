package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Recruiter;

public interface IRecruiterService {

	List<Recruiter> getAllRecruiters();

	Recruiter getRecruiterById(int id);

	void addRecruiter(Recruiter recruiter);

	void updateRecruiter(Recruiter recruiter);

	List<Recruiter> getActiveRecruiters();
}
