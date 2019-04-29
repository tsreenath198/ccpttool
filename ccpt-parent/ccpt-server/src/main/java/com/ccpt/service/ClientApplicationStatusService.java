package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.model.ConsultantStatus;
import com.ccpt.repository.ClientApplicationStatusRepository;
import com.ccpt.repository.ClientPositionStatusRepository;
import com.ccpt.repository.ConsultantStatusRepository;

@Service
public class ClientApplicationStatusService implements IClientApplicationStatusService {
	@Autowired
	private ClientApplicationStatusRepository clientApplicationStatusRepository;

	@Autowired
	private ClientPositionStatusRepository clientPositionStatusRepository;

	@Override
	public void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus) {
		clientApplicationStatusRepository.save(clientApplicationStatus);
	}

	@Autowired
	private ConsultantStatusRepository consultantStatusRepository;

	@Override
	public List<ClientApplicationStatus> getAllClientApplications() {
		List<ClientApplicationStatus> list = new ArrayList<>();
		clientApplicationStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public List<ClientPositionStatus> getAllClientPositionStatus() {
		List<ClientPositionStatus> list = new ArrayList<>();
		clientPositionStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public List<ConsultantStatus> getAllConsultantStatus() {
		List<ConsultantStatus> list = new ArrayList<>();
		consultantStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

}
