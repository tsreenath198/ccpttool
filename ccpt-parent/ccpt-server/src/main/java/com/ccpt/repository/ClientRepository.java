package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Client;

public interface ClientRepository extends CrudRepository<Client, Integer> {
	List<Client> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);
	Client findByIdAndActiveFlag(int id, Character status);
}
