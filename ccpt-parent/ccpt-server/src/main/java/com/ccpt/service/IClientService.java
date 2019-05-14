package com.ccpt.service;

import java.util.List;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.Client;

public interface IClientService {
	List<Client> getAllClients();

	boolean addClient(Client client);

	Client getClientById(Integer id) throws ResourceNotFoundException;

	void updateClient(Client client);

	void deleteClient(Integer id) throws ResourceNotFoundException;
}
