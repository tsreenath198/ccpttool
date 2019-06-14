package com.ccpt.repository;

import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientPositionStatus;

public interface ClientPositionStatusRepository extends BaseRepository<ClientPositionStatus, Integer> {
	ClientPositionStatus findByCodeAndActiveFlag(@Param("code") String code,
			@Param("activeFlag") Boolean activeFlag);
}
