package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.ConsultantStatusDTO;
import com.ccpt.model.ConsultantStatus;

@Mapper
public interface ConsultantStatusMapper extends BaseMapper<ConsultantStatusDTO, ConsultantStatus, String> {
}
