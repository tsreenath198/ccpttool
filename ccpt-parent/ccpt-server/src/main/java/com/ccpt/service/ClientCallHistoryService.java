package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientCallHistory;
import com.ccpt.repository.ClientCallHistoryRepository;

@Service
public class ClientCallHistoryService implements IClientCallHistoryService {
	@Autowired
	private ClientCallHistoryRepository clientCallHistoryRepository;

	@Override
	public List<ClientCallHistory> getAllClientCallHistorys() {
		List<ClientCallHistory> list = new ArrayList<>();
		clientCallHistoryRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientCallHistory getClientCallHistoryById(int id) {
		ClientCallHistory obj = clientCallHistoryRepository.findById(id).get();
		return obj;
	}

	@Override
	public void updateClientCallHistory(ClientCallHistory clientCallHistory) {
		clientCallHistoryRepository.save(clientCallHistory);

	}

	@Override
	public void deleteClientCallHistory(int id) {
		clientCallHistoryRepository.delete(getClientCallHistoryById(id));

	}

	@Override
	public boolean addClientCallHistory(ClientCallHistory clientCallHistory) {
		clientCallHistoryRepository.save(clientCallHistory);
		return true;
	}

}
