package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Consultant;

public interface ConsultantRepository extends CrudRepository<Consultant, Integer> {

	List<Consultant> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(String ActiveFlag);

	Consultant findByIdAndActiveFlag(int id, char status);
}
