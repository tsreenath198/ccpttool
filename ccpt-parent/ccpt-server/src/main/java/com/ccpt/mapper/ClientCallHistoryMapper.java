package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.ccpt.dto.ClientCallHistoryDTO;
import com.ccpt.model.ClientCallHistory;

@Mapper
public interface ClientCallHistoryMapper extends BaseMapper<ClientCallHistoryDTO, ClientCallHistory, Integer> {
	@Mappings({ @Mapping(source = "cpId", target = "clientPosition.id"),
			@Mapping(source = "calledBy", target = "calledBy.id") })
	public ClientCallHistory toModel(ClientCallHistoryDTO dto);
}
