package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.ClientApplicationStatusDTO;
import com.ccpt.model.ClientApplicationStatus;

@Mapper
public interface ClientApplicationStatusMapper
		extends BaseMapper<ClientApplicationStatusDTO, ClientApplicationStatus, String> {
}
