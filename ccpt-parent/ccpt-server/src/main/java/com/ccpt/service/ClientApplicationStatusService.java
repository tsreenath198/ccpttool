package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

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

	@Override
	public List<ClientApplicationStatus> getAllClientApplications() {
		List<ClientApplicationStatus> list = new ArrayList<>();
		clientApplicationStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}
	
	@Override
	public ClientApplicationStatus getClientApplicationStatusById(String  code) {
		ClientApplicationStatus obj = clientApplicationStatusRepository.findById(code).get();
		return obj;
	}
}