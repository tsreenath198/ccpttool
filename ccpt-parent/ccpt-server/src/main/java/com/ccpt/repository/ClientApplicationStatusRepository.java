package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ClientApplicationStatus;

public interface ClientApplicationStatusRepository extends CrudRepository<ClientApplicationStatus, String> {
	List<ClientApplicationStatus> findByActiveFlagAllIgnoreCase(String ActiveFlag);
	ClientApplicationStatus findByCodeAndActiveFlag(String code, Character status);
}
