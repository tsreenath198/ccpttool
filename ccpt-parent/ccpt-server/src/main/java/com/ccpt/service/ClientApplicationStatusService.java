package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationStatusRepository;

@Service
public class ClientApplicationStatusService extends BaseService<ClientApplicationStatus, Integer> {
	public ClientApplicationStatusService() {
		super("Client Application Status");
	}

	@Autowired
	private ClientApplicationStatusRepository clientApplicationStatusRepository;

	@Override
	public BaseRepository<ClientApplicationStatus, Integer> getRepository() {
		return clientApplicationStatusRepository;
	}

	public ClientApplicationStatus findByCode(String code) {
		return clientApplicationStatusRepository.findByCodeAndActiveFlag(code, true);
	}

	public List<DropDownStatistics> getAllCAStatus() {
		return clientApplicationStatusRepository.getAllCAStatus();
	}
}