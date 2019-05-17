package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplication;

@Transactional
public interface ClientApplicationRepository extends CrudRepository<ClientApplication, Integer> {
	public List<ClientApplication> findAllByOrderByUpdatedDateAsc();

	List<ClientApplication> findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc(String ActiveFlag);

	ClientApplication findByIdAndActiveFlag(int id, Character status);
	
	@Query("SELECT c FROM ClientApplication c WHERE clientPositionId=:clientPositionId")
	List<ClientApplication> getClientApplicationByClientPositionId(@Param(value = "clientPositionId") int clientPositionId);
	
	@Query("SELECT c FROM ClientApplication c WHERE consultantId=:consultantId")
	List<ClientApplication> getClientApplicationByConsultantId(@Param(value = "consultantId") int consultantId);
	

	/*@Modifying(clearAutomatically = true)
	@Query("UPDATE ClientApplication c SET c.activeFlag = :activeFlag WHERE c.clientPositionId = :clientPositionId")
	int updateClientApplication(@Param("clientPositionId") int clientPositionId,
			@Param("activeFlag") Character activeFlag);*/
}
