package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.ClientContactDTO;
import com.ccpt.model.ClientContact;

@Mapper
public interface ClientContactMapper extends BaseMapper<ClientContactDTO, ClientContact, Integer> {
}
