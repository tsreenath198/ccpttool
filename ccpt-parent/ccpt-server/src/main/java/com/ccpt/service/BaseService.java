package com.ccpt.service;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.util.CollectionUtils;

import com.ccpt.model.AdditionalProperty;
import com.ccpt.model.BaseEntity;
import com.ccpt.model.BaseReturn;
import com.ccpt.model.FileSupportEntity;
import com.ccpt.model.IDEntity;
import com.ccpt.model.UploadFile;
import com.ccpt.repository.AdditionalPropertyRepository;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.UploadFileRepository;

public abstract class BaseService<T extends BaseEntity<ID>, ID> {
	protected final String ENTITY;

	@Autowired
	private AdditionalPropertyRepository apRepo;

	@Autowired
	private UploadFileRepository ufRepo;

	public BaseService(String entity) {
		this.ENTITY = entity;
	}

	public BaseReturn getAll(Integer pageNo, Integer pageSize, String sortBy) {
		BaseReturn returnObj = new BaseReturn();
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<T> p = getRepository().findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(true, paging);
		returnObj.setNoOfRecords(p.getTotalElements());
		returnObj.setList(p.getContent());
		return returnObj;
	}

	public T get(ID id) {
		return get(id, false);
	}

	public T get(ID id, boolean isAll) {
		Optional<T> entity = getRepository().findByIdAndActiveFlag(id, true);
		if (entity.isPresent()) {
			T result = entity.get();
			if (isAll) {
				if (result instanceof IDEntity) {
					IDEntity idEntity = (IDEntity) result;
					Optional<List<AdditionalProperty>> addnProps = apRepo.findByRefIdAndRefType(idEntity.getId(),
							ENTITY);
					if (addnProps.isPresent()) {
						idEntity.setProperties(addnProps.get());
					}
				}
				if (result instanceof FileSupportEntity) {
					FileSupportEntity fsEntity = (FileSupportEntity) result;
					List<UploadFile> uploadFiles = ufRepo.findByRefIdAndRefType(fsEntity.getId(), ENTITY);
					for (UploadFile uploadFile : uploadFiles) {
						uploadFile.setContent(null);
					}
					fsEntity.setFiles(uploadFiles);
				}
			}
			return result;
		} else {
			throw new EntityNotFoundException("Could not find " + ENTITY + " for id : " + id);
		}
	}

	public T save(T entity) {
		T result = getRepository().save(entity);
		saveAddnProps(entity);
		notify(result, result);
		return result;
	}

	private void saveAddnProps(T entity) {
		if (entity instanceof IDEntity) {
			IDEntity idEntity = (IDEntity) entity;
			Optional<List<AdditionalProperty>> addnProps = apRepo.findByRefIdAndRefType(idEntity.getId(), ENTITY);
			if (addnProps.isPresent()) {
				List<AdditionalProperty> addPropList = addnProps.get();
				if (!CollectionUtils.isEmpty(addPropList)) {
					for (AdditionalProperty additionalProperty : addPropList) {
						// delete previous properties of sameid and entity
						apRepo.deletePropsWithIds(Arrays.asList(additionalProperty.getRefId()));
					}
				}
			}
			if (!CollectionUtils.isEmpty(idEntity.getProperties())) {
				for (AdditionalProperty prop : idEntity.getProperties()) {
					prop.setRefId(idEntity.getId());
					prop.setRefType(ENTITY);
				}
				apRepo.saveAll(idEntity.getProperties());
			}
		}
	}

	@SuppressWarnings("unchecked")
	public T update(T entity) {
		Optional<T> existing = getRepository().findByIdAndActiveFlag(entity.getKey(), true);
		if (entity.getKey() == null) {
			throw new EntityNotFoundException("No primary key passed for " + ENTITY);
		}
		if (existing.isPresent()) {
			T old = null;
			T t = existing.get();
			try {
				old = (T) t.getClass().newInstance();
			} catch (InstantiationException | IllegalAccessException e) {
				e.printStackTrace();
			}
			BeanUtils.copyProperties(t, old);
			T result = getRepository().save(entity);
			saveAddnProps(entity);
			notify(old, entity);
			return result;
		} else {
			throw new EntityNotFoundException("Could not find " + ENTITY + " for id : " + entity.getKey());
		}
	}

	protected void notify(T existing, T result) {
		// override in children

	}

	public void delete(ID id) {
		T entity = get(id, true);
		entity.setActiveFlag(false);
		getRepository().save(entity);
		postDelete(entity);
	}

	protected void postDelete(T entity) {
		// Can be overidden in children
	}

	public abstract BaseRepository<T, ID> getRepository();

	public void activate(ID id) {
		Optional<T> entity = getRepository().findById(id);
		if (entity.isPresent() && !entity.get().getActiveFlag()) {
			entity.get().setActiveFlag(true);
			postActivate(entity.get());
			getRepository().save(entity.get());
		} else {
			throw new EntityNotFoundException("Could not find a inactive" + ENTITY + " for id : " + id);
		}
	}

	protected void postActivate(T entity2) {
		// Can be overidden in children
	}

	protected void sendMail(T entity) {
		// Can be overidden in children
	}
}
