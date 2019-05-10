package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.ClientApplication;

public interface ClientApplicationRepository extends CrudRepository<ClientApplication, Integer> {
	public List<ClientApplication> findAllByOrderByUpdatedDateAsc();

	List<ClientApplication> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);
}
