package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.IndustryType;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.IndustryTypeRespository;

@Service
public class IndustryTypeService extends BaseService<IndustryType, Integer> {
	public IndustryTypeService() {
		super("SMS");
	}

	@Autowired
	private IndustryTypeRespository industryTypeRespository;

	@Override
	public BaseRepository<IndustryType, Integer> getRepository() {
		return industryTypeRespository;
	}

}