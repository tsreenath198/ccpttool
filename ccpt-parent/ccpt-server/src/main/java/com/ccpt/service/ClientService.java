package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Client;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.ClientContact;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientPositionRepository;
import com.ccpt.repository.ClientRepository;

@Service
public class ClientService extends BaseService<Client, Integer> {

	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Autowired
	private ClientCallHistoryService clientCallHistoryService;

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

		List<ClientPosition> cpList = clientPositionRepository
				.findByClientIdAndActiveFlagOrderByCreatedDateDesc(client.getId(), true);
		List<ClientContact> listOfContacts = client.getClientContacts();
		for (ClientContact cc : listOfContacts) {
			cc.setActiveFlag(false);
			cc.setUpdatedDate(new Date());
		}
		for (ClientPosition cp : cpList) {
			List<ClientApplication> listOfCA = clientApplicationRepository
					.findByClientPositionIdAndActiveFlagOrderByCreatedDateDesc(cp.getId(), true);
			for (ClientApplication clientApplication : listOfCA) {
				clientApplication.setActiveFlag(false);
				clientApplication.setUpdatedDate(new Date());
			}
			List<ClientCallHistory> listOfCH = clientCallHistoryService.findByClientPositionId(cp.getId());
			for (ClientCallHistory clientCallHistory : listOfCH) {
				clientCallHistory.setActiveFlag(false);
				clientCallHistory.setUpdatedDate(new Date());
			}
			cp.setActiveFlag(false);
			cp.setUpdatedDate(new Date());
		}
	}

	public List<DropDownStatistics> getAllClients() {
		return clientRepository.getAllClients();
	}

}