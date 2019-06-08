package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPositionStatus;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientPositionStatusRepository;

@Service
public class ClientPositionStatusService extends BaseService<ClientPositionStatus, String> {
	public ClientPositionStatusService() {
		super("Client Position Status");
	}

	@Autowired
	private ClientPositionStatusRepository clientPositionStatusRepository;

	@Override
	public BaseRepository<ClientPositionStatus, String> getRepository() {
		return clientPositionStatusRepository;
	}

}
