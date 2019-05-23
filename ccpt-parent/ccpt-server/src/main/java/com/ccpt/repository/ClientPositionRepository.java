package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientPosition;

public interface ClientPositionRepository extends CrudRepository<ClientPosition, Integer> {
	List<ClientPosition> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(String ActiveFlag);

	List<ClientPosition> findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(String activeFlag);

	ClientPosition findByIdAndActiveFlag(int id, char status);

	@Query("SELECT c FROM ClientPosition c WHERE client_id=:clientId")
	List<ClientPosition> getClientPositionFromClientId(@Param(value = "clientId") Integer clientId);

	@Query("SELECT t1 FROM ClientPosition t1 LEFT JOIN ClientApplication t2 ON t1.id = t2.clientPositionId WHERE t2.clientPositionId is NULL AND t1.clientPositionsStatusCode = 'ACT' and t1.activeFlag = 'Y'")
	List<ClientPosition> getAllOpenCP();
}
