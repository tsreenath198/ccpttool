package com.ccpt.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.AdditionalProperty;

@Transactional
public interface AdditionalPropertyRepository extends BaseRepository<AdditionalProperty, Integer> {
	Optional<List<AdditionalProperty>> findByRefIdAndRefType(Integer refId, String refType);

	@Modifying
	@Query("delete from AdditionalProperty ap where ap.refId in ?1")
	void deletePropsWithIds(List<Integer> refIds);
}
