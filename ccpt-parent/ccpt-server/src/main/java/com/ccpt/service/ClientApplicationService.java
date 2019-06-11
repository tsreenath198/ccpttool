package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.PositionSummaryStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.PositionSummaryRepository;

@Service
public class ClientApplicationService extends BaseService<ClientApplication, Integer> {
	public ClientApplicationService() {
		super("Client Application");
	}

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Autowired
	private PositionSummaryRepository positionSummaryRepository;

	@Override
	public BaseRepository<ClientApplication, Integer> getRepository() {
		return clientApplicationRepository;
	}

	public List<ClientApplication> getAllActiveCAByCpID(Integer cpId) {
		return clientApplicationRepository.getAllActiveCAByCpID(cpId, "ACT");

	}

	public List<PositionSummaryStatistics> getAllActiveCACountByCpID() {
		return positionSummaryRepository.getAllActiveCACountByCpID();
	}
}
