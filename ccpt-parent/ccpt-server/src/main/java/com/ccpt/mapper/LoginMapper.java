package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.LoginDTO;
import com.ccpt.model.Login;

@Mapper
public interface LoginMapper extends BaseMapper<LoginDTO, Login, Integer> {
}
