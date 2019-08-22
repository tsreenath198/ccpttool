package com.ccpt.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.ccpt.model.BaseEntity;

@NoRepositoryBean
public abstract interface BaseRepository<T extends BaseEntity<ID>, ID> extends PagingAndSortingRepository<T, ID> {

	List<T> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(Boolean activeFlag, Pageable paging);

	Optional<T> findByIdAndActiveFlag(ID id, Boolean activeFlag);
	// Optional<T> findByIdAndActiveFlag(@Param("id") ID id,
	// @Param("activeFlag") Boolean activeFlag);
}
