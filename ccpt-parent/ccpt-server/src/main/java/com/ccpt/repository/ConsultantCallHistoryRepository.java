package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ConsultantCallHistory;

public interface ConsultantCallHistoryRepository extends CrudRepository<ConsultantCallHistory, Integer> {
/*	@Query("SELECT consultant_id FROM consultant_call_history WHERE Created_date >= DATE(NOW()) - INTERVAL 7 DAY")
	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(int days);*/

}
