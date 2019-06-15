package com.ccpt.repository;

import org.springframework.data.repository.query.Param;

import com.ccpt.model.ConsultantStatus;

public interface ConsultantStatusRepository extends BaseRepository<ConsultantStatus, Integer> {

	ConsultantStatus findByCodeAndActiveFlag(@Param("code") String code, @Param("activeFlag") Boolean activeFlag);
}
