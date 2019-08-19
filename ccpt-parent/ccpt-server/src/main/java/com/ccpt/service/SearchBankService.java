package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.SearchBank;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.SearchBankRepository;

@Service
public class SearchBankService extends BaseService<SearchBank, Integer> {
	public SearchBankService() {
		super("Search Bank");
	}

	@Autowired
	private SearchBankRepository searchBankRepository;

	@Override
	public BaseRepository<SearchBank, Integer> getRepository() {
		return searchBankRepository;
	}

}