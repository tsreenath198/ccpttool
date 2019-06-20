package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplicationStatistics;
import com.ccpt.model.ClientPosition;

public interface ClientPositionRepository extends BaseRepository<ClientPosition, Integer> {

	List<ClientPosition> findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(Boolean activeFlag);

	@Query("SELECT t1 FROM ClientPosition t1 WHERE t1.id NOT IN (SELECT distinct t2.clientPosition.id FROM ClientApplication t2)")
	List<ClientPosition> getAllOpenCP();

	void deleteByClientId(Integer clientId);

	List<ClientPosition> findByClientIdAndActiveFlag(@Param("clientId") Integer clientId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT id as id,generatedCode as name FROM ClientPosition")
	List<ClientApplicationStatistics> getAllCps();

}
