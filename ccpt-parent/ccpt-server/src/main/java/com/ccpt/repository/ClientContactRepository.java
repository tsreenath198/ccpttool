package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientContact;

public interface ClientContactRepository extends CrudRepository<ClientContact, Integer> {

	ClientContact findByIdAndActiveFlag(int id, Character status);

	@Query("SELECT c FROM ClientContact c WHERE clientId=:clientId")
	List<ClientContact> getClientContactFromClientId(@Param(value = "clientId") Integer clientId);

}
