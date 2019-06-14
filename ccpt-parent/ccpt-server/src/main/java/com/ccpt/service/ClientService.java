package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Client;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientContact;
import com.ccpt.model.ClientPosition;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientPositionRepository;
import com.ccpt.repository.ClientRepository;

@Service
public class ClientService extends BaseService<Client, Integer> {

	@Autowired
	private ClientPositionService clientPositionService;

	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

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
	protected void postDelete(Client client) {

		List<ClientPosition> cpList = clientPositionRepository.findByClientIdAndActiveFlag(client.getId(), true);
		List<ClientContact> listOfContacts = client.getClientContacts();
		for (ClientContact cc : listOfContacts) {
			cc.setActiveFlag(false);
			cc.setUpdatedDate(new Date());
		}
		for (ClientPosition cp : cpList) {
			List<ClientApplication> listOfCA = clientApplicationRepository
					.findByClientPositionIdAndActiveFlag(cp.getId(), true);
			for (ClientApplication clientApplication : listOfCA) {
				clientApplication.setActiveFlag(false);
				clientApplication.setUpdatedDate(new Date());
			}
			cp.setActiveFlag(false);
			cp.setUpdatedDate(new Date());
			clientPositionService.update(cp);
		}
	}

}