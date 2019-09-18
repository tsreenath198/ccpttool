package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Search;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.SearchRepository;

@Service
public class SearchService extends BaseService<Search, Integer> {
	public SearchService() {
		super("Search");
	}

	@Autowired
	private SearchRepository searchRepository;

	@Override
	public BaseRepository<Search, Integer> getRepository() {
		return searchRepository;
	}

	public List<Search> search(String searchKey) {
		return searchRepository.search(searchKey);
	}
}