package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.OtherContactDTO;
import com.ccpt.model.OtherContact;

@Mapper
public interface OtherContactMapper extends BaseMapper<OtherContactDTO, OtherContact, Integer> {

}
