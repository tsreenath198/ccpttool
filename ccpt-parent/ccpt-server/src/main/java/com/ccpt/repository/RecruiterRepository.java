package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Recruiter;
import com.ccpt.model.RecruiterDropdownStatistics;

public interface RecruiterRepository extends BaseRepository<Recruiter, Integer> {
	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag=1")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);

	@Query("SELECT r.id as id,r.aliasName as name, r.email as email,count(cp.assignedTo) as count FROM Recruiter r,ClientPosition cp WHERE cp.assignedTo=r.id AND r.activeFlag=1 GROUP BY cp.assignedTo ORDER BY r.createdDate DESC")
	List<RecruiterDropdownStatistics> getAllCreators();

	@Query(value = "SELECT email FROM Recruiter r WHERE role IN('Admin','Senior Recruiter') AND active_flag=1", nativeQuery = true)
	List<String> getAllLeadEmails();

	@Query("SELECT leadEmail FROM Recruiter  WHERE id=:id AND active_flag=1")
	String getLeadEmailById(@Param(value = "id") Integer id);
}
