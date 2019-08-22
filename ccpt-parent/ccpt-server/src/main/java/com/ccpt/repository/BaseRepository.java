package com.ccpt.repository;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.ccpt.model.BaseEntity;

@NoRepositoryBean
public abstract interface BaseRepository<T extends BaseEntity<ID>, ID> extends PagingAndSortingRepository<T, ID> {

	Page<T> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(Boolean activeFlag, Pageable paging);

	Optional<T> findByIdAndActiveFlag(ID id, Boolean activeFlag);
}
