package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.SearchDTO;
import com.ccpt.model.Search;

@Mapper
public interface SearchMapper extends BaseMapper<SearchDTO, Search, Integer> {

}
