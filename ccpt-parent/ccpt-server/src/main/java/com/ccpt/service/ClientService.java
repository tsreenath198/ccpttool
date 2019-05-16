package com.ccpt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Client;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.ClientContact;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientCallHistoryRepository;
import com.ccpt.repository.ClientContactRepository;
import com.ccpt.repository.ClientPositionRepository;
import com.ccpt.repository.ClientRepository;
import com.ccpt.repository.ConsultantCallHistoryRepository;

@Service
public class ClientService implements IClientService {
	@Autowired
	private ClientRepository clientRepository;

	@Autowired
	private ClientContactRepository clientContactRepository;

	@Autowired
	private ClientCallHistoryRepository clientCallHistoryRepository;

	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;

	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Autowired
	private IClientCallHistoryService clientCallHistoryService;

	@Autowired
	private IConsultantCallHistoryService consultantCallHistoryService;

	@Autowired
	private IClientPositionService clientPositionService;

	@Autowired
	private IClientApplicationService clientApplicationService;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

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

	@Override
	public void updateClientAll(Client client) {

		// delete client-contact
		List<ClientContact> clientContactList = clientContactRepository.getClientContactFromClientId(client.getId());
		for (ClientContact cc : clientContactList) {
			cc.setActiveFlag('N');
			clientContactRepository.save(cc);

		}

		// delete client call history
		List<ClientCallHistory> clientCallHistoryList = clientCallHistoryRepository
				.getClientCallHistorysFromClientId(client.getId());
		for (ClientCallHistory cch : clientCallHistoryList) {
			cch.setActiveFlag('N');
			cch.setUpdatedDate(new Date());
			clientCallHistoryService.addClientCallHistory(cch);
		}
		
		// delete consultant call history
		List<ClientPosition> clientPositionList = clientPositionRepository
				.getClientPositionFromClientId(client.getId());
		for (ClientPosition clientPosition : clientPositionList) {
			int clientPositionId = clientPosition.getId();
			String clientPositionCode = clientPosition.getClientPositionCode();

			List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryRepository
					.getConsultantCallHistoryFromClientPositionCode(clientPositionCode);
			for (ConsultantCallHistory cch : consultantCallHistoryList) {
				cch.setActiveFlag('N');
				cch.setUpdatedDate(new Date());
				consultantCallHistoryService.addConsultantCallHistory(cch);
			}

			List<ClientApplication> clientApplication = clientApplicationRepository
					.getClientApplicationByClientPositionId(clientPositionId);
			for (ClientApplication ca : clientApplication) {
				ca.setActiveFlag('N');
				ca.setUpdatedDate(new Date());
				clientApplicationService.addClientApplication(ca);
			}
			clientPosition.setActiveFlag('N');
			clientPosition.setUpdatedDate(new Date());
			clientPositionService.addClientPosition(clientPosition);
		}
	}

}