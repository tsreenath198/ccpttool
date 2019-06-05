package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.ccpt.dto.ClientPositionDTO;
import com.ccpt.model.ClientPosition;

@Mapper
public interface ClientPositionMapper extends BaseMapper<ClientPositionDTO, ClientPosition, Integer> {

	@Mapping(source = "cpstatus", target = "status.code")
	@Mapping(source = "closedBy", target = "closedBy.id")
	@Mapping(source = "assignedTo", target = "assignedTo.id")
	@Mapping(source = "clientId", target = "client.id")
	public ClientPosition toModel(ClientPositionDTO dto);
}
