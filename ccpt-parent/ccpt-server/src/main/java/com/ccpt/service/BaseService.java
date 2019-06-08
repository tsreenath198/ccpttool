package com.ccpt.service;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.ccpt.model.BaseEntity;
import com.ccpt.repository.BaseRepository;

public abstract class BaseService<T extends BaseEntity<ID>, ID> {
	protected final String ENTITY;

	public BaseService(String entity) {
		this.ENTITY = entity;
	}

	public List<T> getAll() {
		return getRepository().findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(true);
	}

	public T get(ID id) {
		Optional<T> entity = getRepository().findById(id);
		if (entity.isPresent()) {
			return entity.get();
		} else {
			throw new EntityNotFoundException("Could not find " + ENTITY + " for id : " + id);
		}
	}

	public T save(T entity) {
		return getRepository().save(entity);
	}

	public T update(T entity) {
		Optional<T> existing = getRepository().findById(entity.getKey());
		if (entity.getKey() == null) {
			throw new EntityNotFoundException("No primary key passed for " + ENTITY);
		}
		if (existing.isPresent()) {
			return getRepository().save(entity);
		} else {
			throw new EntityNotFoundException("Could not find " + ENTITY + " for id : " + entity.getKey());
		}
	}

	public void delete(ID id) {
		T entity = get(id);
		entity.setActiveFlag(false);
		getRepository().save(entity);
	}

	public abstract BaseRepository<T, ID> getRepository();
}
