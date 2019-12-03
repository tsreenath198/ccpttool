package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPositionStatus;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientPositionStatusRepository;

@Service
public class ClientPositionStatusService extends BaseService<ClientPositionStatus, Integer> {
	@Autowired
	private ClientPositionStatusRepository clientPositionStatusRepository;

	public ClientPositionStatusService() {
		super("Client Position Status");
	}

	@Override
	public BaseRepository<ClientPositionStatus, Integer> getRepository() {
		return clientPositionStatusRepository;
	}

	public ClientPositionStatus findByCode(String code) {
		return clientPositionStatusRepository.findByCodeAndActiveFlagOrderByCreatedDateDesc(code, true);
	}
}
