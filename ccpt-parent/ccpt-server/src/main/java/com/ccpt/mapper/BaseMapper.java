package com.ccpt.mapper;

import com.ccpt.dto.BaseEntityDTO;
import com.ccpt.model.BaseEntity;

public interface BaseMapper<DTO extends BaseEntityDTO<ID>, MODEL extends BaseEntity<ID>, ID> {
	public MODEL toModel(DTO dto);
}
