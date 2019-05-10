package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

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
		clientPositionRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientPosition getClientPositionById(int id) {
		ClientPosition obj = clientPositionRepository.findById(id).get();
		return obj;
	}

	@Override
	public void updateClientPosition(ClientPosition clientPosition) {
		clientPositionRepository.save(clientPosition);

	}

	@Override
	public void deleteClientPosition(int id) {
		clientPositionRepository.delete(getClientPositionById(id));

	}

	@Override
	public boolean addClientPosition(ClientPosition clientPosition) {
		clientPositionRepository.save(clientPosition);
		return true;
	}

}
