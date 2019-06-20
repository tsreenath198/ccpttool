package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.ccpt.dto.ConsultantCallHistoryDTO;
import com.ccpt.model.ConsultantCallHistory;

@Mapper
public interface ConsultantCallHistoryMapper
		extends BaseMapper<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> {

	@Mappings({ @Mapping(source = "consultantId", target = "consultant.id"),
			@Mapping(source = "calledBy", target = "calledBy.id"),
			@Mapping(source = "cpId", target = "clientPosition.id") })
	public ConsultantCallHistory toModel(ConsultantCallHistoryDTO dto);
}
