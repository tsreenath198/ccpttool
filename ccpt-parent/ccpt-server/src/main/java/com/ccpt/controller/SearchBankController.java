package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.SearchBankDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.SearchBankMapper;
import com.ccpt.model.SearchBank;
import com.ccpt.service.BaseService;
import com.ccpt.service.SearchBankService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SEARCH_BANK)
public class SearchBankController extends BaseController<SearchBankDTO, SearchBank, Integer> {

	@Autowired
	private SearchBankService searchBankService;

	@Override
	public BaseService<SearchBank, Integer> getService() {
		return searchBankService;
	}

	@Override
	public BaseMapper<SearchBankDTO, SearchBank, Integer> getMapper() {
		return Mappers.getMapper(SearchBankMapper.class);
	}
}