package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ConsultantCallHistory;

public interface ConsultantCallHistoryRepository extends BaseRepository<ConsultantCallHistory, Integer> {
	@Query("SELECT c FROM ConsultantCallHistory c WHERE (created_date   BETWEEN  :sdate AND  :edate) AND active_flag= :activeFlag")
	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate, @Param(value = "activeFlag") String activeFlag);

	@Query("SELECT  r.fullname, count(*) FROM ClientPosition ca left outer join Recruiter r on ca.closedBy = r.id where ca.closedBy is not null AND (ca.createdDate   BETWEEN  :sdate AND  :edate) group by r.id, r.fullname ")
	List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);
}
