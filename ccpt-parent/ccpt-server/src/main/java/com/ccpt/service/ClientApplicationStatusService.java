package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.repository.ClientApplicationStatusRepository;

@Service
public class ClientApplicationStatusService implements IClientApplicationStatusService {
	@Autowired
	private ClientApplicationStatusRepository clientApplicationStatusRepository;

	@Override
	public void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatusRepository.save(clientApplicationStatus);
	}

}
