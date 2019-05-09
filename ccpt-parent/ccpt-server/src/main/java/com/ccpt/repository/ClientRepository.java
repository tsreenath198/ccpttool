package com.ccpt.repository;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Client;

public interface ClientRepository extends CrudRepository<Client, Integer> {
}
