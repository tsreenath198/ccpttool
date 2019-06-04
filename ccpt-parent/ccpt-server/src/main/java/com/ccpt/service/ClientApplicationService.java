package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;

@Service
public class ClientApplicationService extends BaseService<ClientApplication, Integer> {
	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Override
	public BaseRepository<ClientApplication, Integer> getRepository() {
		return clientApplicationRepository;
	}

}
