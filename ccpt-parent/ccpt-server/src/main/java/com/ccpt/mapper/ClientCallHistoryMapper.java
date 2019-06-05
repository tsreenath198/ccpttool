package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.ccpt.dto.ClientCallHistoryDTO;
import com.ccpt.model.ClientCallHistory;

@Mapper
public interface ClientCallHistoryMapper extends BaseMapper<ClientCallHistoryDTO, ClientCallHistory, Integer> {
	@Mapping(source = "cpId", target = "clientPosition.id")
	public ClientCallHistory toModel(ClientCallHistoryDTO dto);
}
