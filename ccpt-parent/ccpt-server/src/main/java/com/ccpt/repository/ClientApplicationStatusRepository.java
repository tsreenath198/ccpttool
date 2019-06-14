package com.ccpt.repository;

import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplicationStatus;

public interface ClientApplicationStatusRepository extends BaseRepository<ClientApplicationStatus, Integer> {

	ClientApplicationStatus findByCodeAndActiveFlag(@Param("code") String code,
			@Param("activeFlag") Boolean activeFlag);
}
