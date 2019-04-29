package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ClientCallHistory;

public interface ClientCallHistoryRepository extends CrudRepository<ClientCallHistory, Integer> {
	/*@Query("SELECT client_position_id FROM client_call_history WHERE Created_date >= DATE(NOW()) - INTERVAL 7 DAY")
	List<ClientCallHistory> getAllConsultantCallHistorysFromLastGivenDays(int days);
*/
}
