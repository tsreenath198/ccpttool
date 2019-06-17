package com.ccpt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.NoRepositoryBean;

import com.ccpt.model.BaseEntity;

@NoRepositoryBean
public abstract interface BaseRepository<T extends BaseEntity<ID>, ID> extends CrudRepository<T, ID> {

	List<T> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(Boolean activeFlag);

	Optional<T> findByIdAndActiveFlag(ID id, Boolean activeFlag);
	// Optional<T> findByIdAndActiveFlag(@Param("id") ID id,
	// @Param("activeFlag") Boolean activeFlag);
}
