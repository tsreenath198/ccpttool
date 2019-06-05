package com.ccpt.mapper;

import org.mapstruct.MapperConfig;
import org.mapstruct.NullValueCheckStrategy;

import com.ccpt.dto.BaseEntityDTO;
import com.ccpt.model.BaseEntity;

@MapperConfig(nullValueCheckStrategy = NullValueCheckStrategy.ALWAYS)
public interface BaseMapper<DTO extends BaseEntityDTO<ID>, MODEL extends BaseEntity<ID>, ID> {

	public MODEL toModel(DTO dto);
}
