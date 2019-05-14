package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ClientPositionStatus;

public interface ClientPositionStatusRepository extends CrudRepository<ClientPositionStatus, String> {
	List<ClientPositionStatus> findByActiveFlagAllIgnoreCase(String ActiveFlag);
	ClientPositionStatus findByCodeAndActiveFlag(String code, Character status);
}
