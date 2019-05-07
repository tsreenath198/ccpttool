package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

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

	@Override
	public List<ClientPositionStatus> getAllClientPositionStatus() {
		List<ClientPositionStatus> list = new ArrayList<>();
		clientPositionStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	@Override
	public ClientPositionStatus getClientPositionStatusById(String  code) {
		ClientPositionStatus obj = clientPositionStatusRepository.findById(code).get();
		return obj;
	}
}
