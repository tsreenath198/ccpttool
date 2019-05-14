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
		clientApplicationRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientApplication getClientApplicationById(int id) {
		ClientApplication obj = clientApplicationRepository.findByIdAndActiveFlag(id, 'Y');
		return obj;
	}

	@Override
	public void updateClientApplication(ClientApplication clientApplication) throws Exception {
		
		try {
			getClientApplicationById(clientApplication.getId());
			clientApplicationRepository.save(clientApplication);
		} catch (Exception e) {
			throw new Exception("id not available");
		}
	}


	@Override
	public void addClientApplication(ClientApplication clientApplication) {
		clientApplicationRepository.save(clientApplication);
	}

}
