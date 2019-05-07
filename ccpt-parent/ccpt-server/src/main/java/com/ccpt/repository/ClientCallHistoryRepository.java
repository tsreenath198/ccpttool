package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientCallHistory;

public interface ClientCallHistoryRepository extends CrudRepository<ClientCallHistory, Integer> {
	@Query("SELECT c FROM ClientCallHistory c WHERE created_date   BETWEEN  :sdate AND  :edate")
	List<ClientCallHistory> getAllConsultantCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate);

//	@Query("SELECT c FROM ClientCallHistory c WHERE c.name=:name")
//	List<ClientCallHistory> getAllConsultantCallHistorysFromRecruiter(@Param(value = "name") String name);

}
