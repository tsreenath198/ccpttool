package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.PositionSummary;
import com.ccpt.model.PositionSummaryStatistics;

@Transactional
public interface PositionSummaryRepository extends CrudRepository<PositionSummary, Integer> {
	@Query("SELECT ca.id as cpId,cp.generatedCode as generatedCode,COUNT(*) as count FROM ClientPosition cp   left outer join  ClientApplication ca on cp.id = ca.clientPosition group by cp.generatedCode")
	List<PositionSummaryStatistics> getAllActiveCACountByCpID();

}
