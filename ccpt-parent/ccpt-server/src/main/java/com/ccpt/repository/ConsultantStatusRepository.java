package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ConsultantStatus;

public interface ConsultantStatusRepository extends CrudRepository<ConsultantStatus, String> {
	List<ConsultantStatus> findByActiveFlagAllIgnoreCase(String ActiveFlag);
	ConsultantStatus findByCodeAndActiveFlag(String code, Character status);
}
