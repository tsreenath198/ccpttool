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

	/*
	 * @Query("SELECT closedBy, COUNT(closed_by) FROM ClientPosition  WHERE created_date  BETWEEN  :sdate AND  :edate GROUP BY closed_by"
	 * ) List<Object[]>
	 * getClosedCountOfAllRecruitersFromLastGivenDays(@Param(value = "sdate")
	 * Date sdate,
	 * 
	 * @Param(value = "edate") Date edate);
	 */

	@Query(value = "SELECT recruiter.fullname,COUNT(client_position.closed_by) FROM client_position LEFT JOIN recruiter on client_position.closed_by = recruiter.id GROUP BY fullname", nativeQuery = true)
	List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);

}
