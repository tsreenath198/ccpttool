package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

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
		clientRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public boolean addClient(Client client) {
		clientRepository.save(client);
		return true;
	}

	@Override
	public Client getClientById(Integer id) {
		Client obj = clientRepository.findById(id).get();
		return obj;
	}
}