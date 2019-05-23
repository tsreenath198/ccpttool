package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPosition;
import com.ccpt.repository.ClientPositionRepository;

@Service
public class ClientPositionService implements IClientPositionService {
	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Override
	public List<ClientPosition> getAllClientPositions() {
		List<ClientPosition> list = new ArrayList<>();
		clientPositionRepository.findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientPosition getClientPositionById(int id) {
		ClientPosition obj = clientPositionRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateClientPosition(ClientPosition clientPosition) {
		getClientPositionById(clientPosition.getId());
		clientPositionRepository.save(clientPosition);

	}

	@Override
	public void deleteClientPosition(int id) {
		clientPositionRepository.delete(getClientPositionById(id));

	}

	@Override
	public void addClientPosition(ClientPosition clientPosition) {
		clientPositionRepository.save(clientPosition);
	}
	@Override
	public List<ClientPosition> getTop5ClientPositions() {
		List<ClientPosition> list = new ArrayList<>();
		clientPositionRepository.findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public List<ClientPosition> getAllOpenCP() {
		List<ClientPosition> list = new ArrayList<>();
		clientPositionRepository.getAllOpenCP().forEach(e -> list.add(e));
		return list;
	}
}
