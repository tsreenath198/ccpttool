package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;
import org.mapstruct.NullValueMappingStrategy;

import com.ccpt.dto.ClientApplicationDTO;
import com.ccpt.model.ClientApplication;

@Mapper(nullValueMappingStrategy = NullValueMappingStrategy.RETURN_NULL)
public interface ClientApplicationMapper extends BaseMapper<ClientApplicationDTO, ClientApplication, Integer> {
	@Mappings({ @Mapping(source = "caStatus", target = "status.code"),
			@Mapping(source = "cpId", target = "clientPosition.id"),
			@Mapping(source = "consultantId", target = "consultant.id"),
			@Mapping(source = "creatorId", target = "creator.id") })
	public ClientApplication toModel(ClientApplicationDTO dto);
}
