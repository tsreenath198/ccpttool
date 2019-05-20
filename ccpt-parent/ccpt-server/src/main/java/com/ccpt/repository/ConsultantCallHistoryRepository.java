package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ConsultantCallHistory;

public interface ConsultantCallHistoryRepository extends CrudRepository<ConsultantCallHistory, Integer> {
	@Query("SELECT c FROM ConsultantCallHistory c WHERE (created_date   BETWEEN  :sdate AND  :edate) AND active_flag= :activeFlag")
	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate, @Param(value = "activeFlag") String activeFlag);

	public List<ConsultantCallHistory> findAllByOrderByUpdatedDateDesc();

	ConsultantCallHistory findByIdAndActiveFlag(int id, char status);

	@Query("SELECT c FROM ConsultantCallHistory c WHERE clientPositionCode=:clientPositionCode")
	List<ConsultantCallHistory> getConsultantCallHistoryFromClientPositionCode(
			@Param(value = "clientPositionCode") String clientPositionCode);

	@Query("SELECT c FROM ConsultantCallHistory c WHERE consultantId=:consultantId")
	List<ConsultantCallHistory> getConsultantCallHistoryFromConsultantId(
			@Param(value = "consultantId") Integer consultantId);

	List<ConsultantCallHistory> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);

	@Query("SELECT  r.fullname, count(*) FROM ClientApplication ca left outer join Recruiter r on ca.closedBy = r.id where ca.closedBy is not null AND (ca.createdDate   BETWEEN  :sdate AND  :edate) group by r.id, r.fullname ")
	List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);

}
