package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Client;

public interface IClientService {
	List<Client> getAllClients();

	void addClient(Client client);

	Client getClientById(Integer id);

	void updateClient(Client client);

}
