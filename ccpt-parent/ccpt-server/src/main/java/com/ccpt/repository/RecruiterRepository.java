package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Recruiter;
import com.ccpt.model.RecruiterDropdownStatistics;

public interface RecruiterRepository extends BaseRepository<Recruiter, Integer> {
	@Query("SELECT r FROM Recruiter r WHERE fullname=:name AND active_flag=1")
	Recruiter getRecruiterFromName(@Param(value = "name") String name);

	@Query(value="SELECT r.id as id,r.alias_name as name, r.email as email,count(cp.assigned_to) as count FROM Recruiter r LEFT JOIN Client_Position cp ON r.id =cp.assigned_to WHERE  r.active_flag=1 GROUP BY cp.assigned_to ORDER BY r.created_date",nativeQuery = true)
	List<RecruiterDropdownStatistics> getAllCreators();

	@Query(value = "SELECT email FROM Recruiter r WHERE role IN('Admin','Senior Recruiter') AND active_flag=1", nativeQuery = true)
	List<String> getAllLeadEmails();

	@Query("SELECT leadEmail FROM Recruiter  WHERE id=:id AND active_flag=1")
	String getLeadEmailById(@Param(value = "id") Integer id);
}
