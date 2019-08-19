package com.ccpt.controller;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.SearchDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.SearchMapper;
import com.ccpt.model.Search;
import com.ccpt.service.BaseService;
import com.ccpt.service.SearchService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.SEARCH_BANK)
public class SearchController extends BaseController<SearchDTO, Search, Integer> {

	@Autowired
	private SearchService searchService;

	@Override
	public BaseService<Search, Integer> getService() {
		return searchService;
	}

	@Override
	public BaseMapper<SearchDTO, Search, Integer> getMapper() {
		return Mappers.getMapper(SearchMapper.class);
	}
}