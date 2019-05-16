package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Client;
import com.ccpt.repository.ClientRepository;

@Service
public class ClientService implements IClientService {
	@Autowired
	private ClientRepository clientRepository;

	@Override
	public List<Client> getAllClients() {
		List<Client> list = new ArrayList<>();
		clientRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public void addClient(Client client) {
		clientRepository.save(client);
	}

	@Override
	public Client getClientById(Integer id) {
		Client obj = clientRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateClient(Client client) {
		getClientById(client.getId());
		clientRepository.save(client);
	}
}