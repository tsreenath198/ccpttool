package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

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
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateClientApplication(ClientApplication clientApplication) {
		getClientApplicationById(clientApplication.getId());
		clientApplicationRepository.save(clientApplication);
	}

	@Override
	public void addClientApplication(ClientApplication clientApplication) {
		clientApplicationRepository.save(clientApplication);
	}

}
