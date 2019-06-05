package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.ClientContactDTO;
import com.ccpt.dto.ClientDTO;
import com.ccpt.model.Client;
import com.ccpt.model.ClientContact;

@Mapper
public interface ClientMapper extends BaseMapper<ClientDTO, Client, Integer> {

	public ClientContact toContactDTO(ClientContactDTO dto);
}
