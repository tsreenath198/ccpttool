package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.SearchBankDTO;
import com.ccpt.model.SearchBank;

@Mapper
public interface SearchBankMapper extends BaseMapper<SearchBankDTO, SearchBank, Integer> {

}
