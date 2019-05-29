package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Recruiter;

public interface RecruiterRepository extends CrudRepository<Recruiter, Integer> {
	public List<Recruiter> findAllByOrderByCreatedDateDesc();
	// public List<Recruiter> findByStatus(String status);

	List<Recruiter> findByActiveFlagAndStatusAllIgnoreCaseOrderByCreatedDateDesc(String activeFlag, String status);

	List<Recruiter> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(String ActiveFlag);

	Recruiter findByIdAndActiveFlag(int id, Character status);

	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag='Y'")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);
}
