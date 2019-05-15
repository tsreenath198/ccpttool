package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ClientPosition;

public interface ClientPositionRepository extends CrudRepository<ClientPosition, Integer> {
	 List<ClientPosition> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);

	ClientPosition findByIdAndActiveFlag(int id, char status);
}
