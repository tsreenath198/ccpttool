package com.ccpt.repository;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import com.ccpt.model.AdditionalProperty;

@Transactional
public interface AdditionalPropertyRepository extends BaseRepository<AdditionalProperty, Integer> {
	Optional<List<AdditionalProperty>> findByRefIdAndRefType(Integer refId, String refType);
}
