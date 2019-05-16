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

}
