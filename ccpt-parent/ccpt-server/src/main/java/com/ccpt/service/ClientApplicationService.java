package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.repository.ClientApplicationRepository;

@Service
public class ClientApplicationService implements IClientApplicationService {
	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Override
	public List<ClientApplication> getAllClientApplications() {
		List<ClientApplication> list = new ArrayList<>();
		clientApplicationRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientApplication getClientApplicationById(int id) {
		ClientApplication obj = clientApplicationRepository.findById(id).get();
		return obj;
	}

	@Override
	public void updateClientApplication(ClientApplication clientApplication) {
		clientApplicationRepository.save(clientApplication);

	}

	@Override
	public void deleteClientApplication(int id) {
		clientApplicationRepository.delete(getClientApplicationById(id));

	}

	@Override
	public void addClientApplication(ClientApplication clientApplication) {
		clientApplicationRepository.save(clientApplication);
	}

}
