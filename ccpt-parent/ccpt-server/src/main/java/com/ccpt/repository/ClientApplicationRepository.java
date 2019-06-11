package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.Detail;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

	@Query("SELECT c FROM ClientApplication c where client_position_id=:id AND status_code=:status")
	List<ClientApplication> getAllActiveCAByCpID(@Param(value = "id") Integer id,
			@Param(value = "status") String status);

	@Query("SELECT ca.id,cp.generatedCode as generatedCode,COUNT(*) as count FROM ClientPosition cp   left outer join  ClientApplication ca on cp.id = ca.clientPosition group by cp.generatedCode")
	List<Detail> getAllActiveCACountByCpID();

}
