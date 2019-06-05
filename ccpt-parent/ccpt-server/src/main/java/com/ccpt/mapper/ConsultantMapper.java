package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.ccpt.dto.ConsultantDTO;
import com.ccpt.model.Consultant;

@Mapper
public interface ConsultantMapper extends BaseMapper<ConsultantDTO, Consultant, Integer> {

	@Mapping(source = "CStatus", target = "status.code")
	public Consultant toModel(ConsultantDTO dto);
}
