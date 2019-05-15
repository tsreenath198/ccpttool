package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPositionStatus;
import com.ccpt.repository.ClientPositionStatusRepository;

@Service
public class ClientPositionStatusService implements IClientPositionStatusService {
	@Autowired
	private ClientPositionStatusRepository clientPositionStatusRepository;

	@Override
	public void addClientPositionStatus(ClientPositionStatus clientPositionStatus) {
		clientPositionStatusRepository.save(clientPositionStatus);

	}

	@Override
	public List<ClientPositionStatus> getAllClientPositionStatus() {
		List<ClientPositionStatus> list = new ArrayList<>();
		clientPositionStatusRepository.findByActiveFlagAllIgnoreCase("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ClientPositionStatus getClientPositionStatusById(String code) {
		ClientPositionStatus obj = clientPositionStatusRepository.findByCodeAndActiveFlag(code, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on code:: " + code);
	}

	@Override
	public void updateClientPositionStatus(ClientPositionStatus clientPositionStatus) {
		getClientPositionStatusById(clientPositionStatus.getCode());
		clientPositionStatusRepository.save(clientPositionStatus);
	}

	@Override
	public void deleteClientPositionStatus(String code) {
		ClientPositionStatus cps = null;
		cps = getClientPositionStatusById(code);
		cps.setActiveFlag('N');
		clientPositionStatusRepository.save(cps);
	}
}
