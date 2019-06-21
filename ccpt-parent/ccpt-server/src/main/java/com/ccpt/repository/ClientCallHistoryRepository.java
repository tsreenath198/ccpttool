package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ClientCallHistory;

public interface ClientCallHistoryRepository extends BaseRepository<ClientCallHistory, Integer> {
	@Query("SELECT c FROM ClientCallHistory c WHERE (created_date   BETWEEN  :sdate AND  :edate) AND active_flag= :activeFlag")
	List<ClientCallHistory> getAllClientCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate, @Param(value = "activeFlag") Boolean activeFlag);

	List<ClientCallHistory> findByClientPositionIdAndActiveFlag(@Param("clientPositionId") Integer clientPositionId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT recruiter.id as recruiterId, recruiter.fullname as fullname ,COUNT(*) as count FROM recruiter INNER JOIN client_call_history ON recruiter.id=client_call_history.called_by AND client_call_history.active_flag='1' AND recruiter.active_flag='1'  GROUP BY recruiter.fullname", nativeQuery = true)
	List<CallHistorySummaryStatistics> getAllCchCountByRecruiters();

	@Query("SELECT c FROM ClientCallHistory c WHERE called_by=:rId AND active_flag= :activeFlag")
	List<ClientCallHistory> getAllCchByRecruiterId(@Param("rId") Integer rId, @Param("activeFlag") Boolean activeFlag);
}
