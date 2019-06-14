package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.ClientPositionStatusDTO;
import com.ccpt.model.ClientPositionStatus;

@Mapper
public interface ClientPositionStatusMapper extends BaseMapper<ClientPositionStatusDTO, ClientPositionStatus, Integer> {
}
