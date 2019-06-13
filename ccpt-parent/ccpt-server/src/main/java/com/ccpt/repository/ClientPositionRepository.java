package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.ClientPosition;

public interface ClientPositionRepository extends BaseRepository<ClientPosition, Integer> {

	List<ClientPosition> findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(Boolean activeFlag);

	@Query("SELECT t1 FROM ClientPosition t1 WHERE t1.id NOT IN (SELECT distinct t2.clientPosition.id FROM ClientApplication t2)")
	List<ClientPosition> getAllOpenCP();

	void deleteByClientId(Integer clientId);
}
