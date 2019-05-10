package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ConsultantCallHistory;

public interface ConsultantCallHistoryRepository extends CrudRepository<ConsultantCallHistory, Integer> {
	@Query("SELECT c FROM ConsultantCallHistory c WHERE created_date   BETWEEN  :sdate AND  :edate")
	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);
	public List<ConsultantCallHistory> findAllByOrderByUpdatedDateDesc();
}
