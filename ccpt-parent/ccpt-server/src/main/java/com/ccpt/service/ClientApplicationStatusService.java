package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.repository.ClientApplicationStatusRepository;

@Service
public class ClientApplicationStatusService implements IClientApplicationStatusService {
	@Autowired
	private ClientApplicationStatusRepository clientApplicationStatusRepository;

	@Override
	public void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatusRepository.save(clientApplicationStatus);
	}

	@Override
	public List<ClientApplicationStatus> getAllClientApplications() {
		List<ClientApplicationStatus> list = new ArrayList<>();
		clientApplicationStatusRepository.findByActiveFlagAllIgnoreCase("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientApplicationStatus getClientApplicationStatusById(String code) {
		ClientApplicationStatus obj = clientApplicationStatusRepository.findByCodeAndActiveFlag(code, 'Y');
		return obj;
	}

	@Override
	public void updateClientApplicationStatus(ClientApplicationStatus clientApplicationStatus) throws Exception {
		try {
			getClientApplicationStatusById(clientApplicationStatus.getCode());
			clientApplicationStatusRepository.save(clientApplicationStatus);
		} catch (Exception e) {
			throw new Exception("id not available");
		}
		
//		clientApplicationStatusRepository.save(clientApplicationStatus);

	}

	@Override
	public void deleteClientApplicationStatus(String code) throws Exception {
		ClientApplicationStatus cas = null;
		try {
			cas = getClientApplicationStatusById(code);
			cas.setActiveFlag('N');
			clientApplicationStatusRepository.save(cas);
		} catch (Exception e) {
			throw new Exception("id not available");
		}

	}

	@Override
	public ClientApplicationStatus getConsultantCallHistoryByCode(String code) {
		ClientApplicationStatus obj = clientApplicationStatusRepository.findById(code).get();
		return obj;
	}
}