package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplication;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

	@Query("SELECT c FROM ClientApplication c where client_position_id=:id AND status_code=:status")
	List<ClientApplication> getAllActiveCAByCpID(@Param(value = "id") Integer id,
			@Param(value = "status") String status);

	@Query("SELECT count(*) FROM ClientApplication c where client_position_id=:cpId AND consultant_id=:cid")
	Integer checkPositionWithConsultant(@Param(value = "cpId") Integer cpId,
			@Param(value = "cid") Integer cid);

}
