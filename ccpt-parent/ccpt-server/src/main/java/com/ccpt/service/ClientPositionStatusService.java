package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPositionStatus;
import com.ccpt.repository.ClientPositionStatusRepository;

@Service
public class ClientPositionStatusService implements IClientPositionStatusService {
	@Autowired
	private ClientPositionStatusRepository clientPositionStatusRepository;

	@Override
	public void addClientPositionStatus(ClientPositionStatus clientPositionStatus) {
		clientPositionStatusRepository.save(clientPositionStatus);

	}

}
