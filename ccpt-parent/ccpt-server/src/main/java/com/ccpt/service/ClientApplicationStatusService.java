package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationStatusRepository;

@Service
public class ClientApplicationStatusService extends BaseService<ClientApplicationStatus, String> {
	public ClientApplicationStatusService() {
		super("Client Application Status");
	}

	@Autowired
	private ClientApplicationStatusRepository clientApplicationStatusRepository;

	@Override
	public BaseRepository<ClientApplicationStatus, String> getRepository() {
		return clientApplicationStatusRepository;
	}

}