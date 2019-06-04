package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPosition;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientPositionRepository;

@Service
public class ClientPositionService extends BaseService<ClientPosition, Integer> {
	@Autowired
	private ClientPositionRepository clientPositionRepository;

	public List<ClientPosition> getTop5ClientPositions() {
		return clientPositionRepository.findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(true);
	}

	public List<ClientPosition> getAllOpenCP() {
		return clientPositionRepository.getAllOpenCP();
	}

	@Override
	public BaseRepository<ClientPosition, Integer> getRepository() {
		return clientPositionRepository;
	}
}
