package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.IndustryTypeDTO;
import com.ccpt.model.IndustryType;

@Mapper
public interface IndustryTypeMapper extends BaseMapper<IndustryTypeDTO, IndustryType, Integer>{

}
