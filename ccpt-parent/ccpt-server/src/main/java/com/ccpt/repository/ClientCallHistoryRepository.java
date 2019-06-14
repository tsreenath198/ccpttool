package com.ccpt.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientCallHistory;

public interface ClientCallHistoryRepository extends BaseRepository<ClientCallHistory, Integer> {
	@Query("SELECT c FROM ClientCallHistory c WHERE (created_date   BETWEEN  :sdate AND  :edate) AND active_flag= :activeFlag")
	List<ClientCallHistory> getAllClientCallHistorysFromLastGivenDays(@Param(value = "sdate") Date sdate,
			@Param(value = "edate") Date edate, @Param(value = "activeFlag") Boolean activeFlag);

	List<ClientCallHistory> findByClientPositionIdAndActiveFlag(@Param("clientPositionId") Integer clientPositionId,
			@Param("activeFlag") Boolean activeFlag);
}
