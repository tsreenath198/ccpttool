package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.EmailContent;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.EmailContentRepository;

@Service
public class EmailContentService extends BaseService<EmailContent, Integer> {
	@Autowired
	private EmailContentRepository emailContentRepository;

	@Override
	public BaseRepository<EmailContent, Integer> getRepository() {
		return emailContentRepository;
	}

}