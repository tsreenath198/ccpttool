package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.PositionSummary;
import com.ccpt.model.PositionSummaryStatistics;

@Transactional
public interface PositionSummaryRepository extends CrudRepository<PositionSummary, Integer> {
	@Query(value = "SELECT client_position.id as cpId, client_position.generated_code as generatedCode ,COUNT(*) as count FROM client_position INNER JOIN client_application ON client_position.id=client_application.client_position_id AND client_application.active_flag='1' AND client_position.active_flag='1' AND client_position.status_code!='Closed' AND client_application.status_code!='Rejected By Client' GROUP BY client_position.generated_code", nativeQuery = true)
	List<PositionSummaryStatistics> getAllActiveCACount();

}
