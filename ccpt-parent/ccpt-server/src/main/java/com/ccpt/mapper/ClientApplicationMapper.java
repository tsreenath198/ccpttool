package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import com.ccpt.dto.ClientApplicationDTO;
import com.ccpt.model.ClientApplication;

@Mapper
public interface ClientApplicationMapper extends BaseMapper<ClientApplicationDTO, ClientApplication, Integer> {

	@Mapping(source = "caStatus", target = "status.code")
	@Mapping(source = "cpId", target = "clientPosition.id")
	@Mapping(source = "consultantId", target = "consultant.id")
	public ClientApplication toModel(ClientApplicationDTO dto);
}
