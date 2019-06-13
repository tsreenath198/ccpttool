package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Client;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientRepository;

@Service
public class ClientService extends BaseService<Client, Integer> {
	
	@Autowired
	private ClientPositionService clientPositionService;
	
	public ClientService() {
		super("Client");
	}

	@Autowired
	private ClientRepository clientRepository;

	@Override
	public BaseRepository<Client, Integer> getRepository() {
		return clientRepository;
	}

	@Override
	protected void postDelete(Integer id) {
		clientPositionService.deleteByClientId(id);
	}

}