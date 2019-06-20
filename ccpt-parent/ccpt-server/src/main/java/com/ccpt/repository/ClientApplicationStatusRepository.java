package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplicationStatistics;
import com.ccpt.model.ClientApplicationStatus;

public interface ClientApplicationStatusRepository extends BaseRepository<ClientApplicationStatus, Integer> {

	ClientApplicationStatus findByCodeAndActiveFlag(@Param("code") String code,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT id as id,description as name FROM ClientApplicationStatus")
	List<ClientApplicationStatistics> getAllCAStatus();
}
