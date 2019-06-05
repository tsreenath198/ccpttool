package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.ccpt.dto.ConsultantCallHistoryDTO;
import com.ccpt.model.ConsultantCallHistory;

@Mapper
public interface ConsultantCallHistoryMapper
		extends BaseMapper<ConsultantCallHistoryDTO, ConsultantCallHistory, Integer> {
	@Mapping(source = "consultantId", target = "consultant.id")
	public ConsultantCallHistory toModel(ConsultantCallHistoryDTO dto);
}
