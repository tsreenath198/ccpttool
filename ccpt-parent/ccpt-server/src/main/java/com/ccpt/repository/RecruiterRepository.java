package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Recruiter;

public interface RecruiterRepository extends CrudRepository<Recruiter, Integer> {
	public List<Recruiter> findAllByOrderByUpdatedDateDesc();
//	public List<Recruiter> findByStatus(String status);
	
	 List<Recruiter> findByActiveFlagAndStatusAllIgnoreCaseOrderByUpdatedDateDesc(String activeFlag, String status);
	 
	 List<Recruiter> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);
}
