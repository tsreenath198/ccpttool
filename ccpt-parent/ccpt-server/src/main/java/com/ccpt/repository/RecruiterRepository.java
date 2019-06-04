package com.ccpt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Recruiter;

public interface RecruiterRepository extends BaseRepository<Recruiter, Integer> {
	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag='Y'")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);
}
