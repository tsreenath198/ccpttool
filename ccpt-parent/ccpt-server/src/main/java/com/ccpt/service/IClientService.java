package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Client;

public interface IClientService {
	List<Client> getAllClients();

	boolean addClient(Client client);
}
