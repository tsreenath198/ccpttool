package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.OtherContact;

public interface OtherContactRepository extends CrudRepository<OtherContact, Integer> {
	List<OtherContact> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);

	OtherContact findByIdAndActiveFlag(int id, Character status);
}
