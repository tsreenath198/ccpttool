package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ConsultantCallHistory;

public interface ConsultantCallHistoryRepository extends BaseRepository<ConsultantCallHistory, Integer> {
	@Query("SELECT c FROM ConsultantCallHistory c WHERE (created_date   BETWEEN  :sdate AND  :edate) AND active_flag= :activeFlag")
	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate, @Param(value = "activeFlag") boolean activeFlag);

	@Query("SELECT  r.fullname, count(*) FROM ClientPosition ca left outer join Recruiter r on ca.closedBy = r.id where ca.closedBy is not null AND (ca.createdDate   BETWEEN  :sdate AND  :edate) group by r.id, r.fullname ")
	List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);

	@Query(value = "SELECT recruiter.id as recruiterId, recruiter.fullname as fullname ,COUNT(*) as count FROM recruiter INNER JOIN consultant_call_history ON recruiter.id=consultant_call_history.called_by AND consultant_call_history.active_flag='1' AND recruiter.active_flag='1'  GROUP BY recruiter.fullname", nativeQuery = true)
	List<CallHistorySummaryStatistics> getAllconCHCountByRecruiters();

	@Query("SELECT c FROM ConsultantCallHistory c WHERE called_by=:rId AND active_flag= :activeFlag")
	List<ConsultantCallHistory> getAllconCHByRecruiterId(@Param("rId") Integer rId,
			@Param("activeFlag") Boolean activeFlag);
}
