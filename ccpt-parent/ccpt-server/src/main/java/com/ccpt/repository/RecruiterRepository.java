package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Recruiter;
import com.ccpt.model.RecruiterDropdownStatistics;

public interface RecruiterRepository extends BaseRepository<Recruiter, Integer> {
	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag='Y'")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);

	@Query("SELECT id as id,aliasName as name, email as email FROM Recruiter WHERE active_flag=1")
	List<RecruiterDropdownStatistics> getAllCreators();
}
