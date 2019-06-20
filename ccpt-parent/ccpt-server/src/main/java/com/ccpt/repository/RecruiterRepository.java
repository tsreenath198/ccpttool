package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.DropDownStatistics;
import com.ccpt.model.Recruiter;

public interface RecruiterRepository extends BaseRepository<Recruiter, Integer> {
	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag='Y'")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);

	@Query(value = "SELECT id as id,aliasName as name FROM Recruiter")
	List<DropDownStatistics> getAllCreators();
}
