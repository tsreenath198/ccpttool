package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

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
		return obj;
	}

	@Override
	public void updateClientPositionStatus(ClientPositionStatus clientPositionStatus) throws Exception {

		try {
			getClientPositionStatusById(clientPositionStatus.getCode());
			clientPositionStatusRepository.save(clientPositionStatus);
		} catch (Exception e) {
			throw new Exception("id not available");
		}
	}

	@Override
	public void deleteClientPositionStatus(String code) throws Exception {
		ClientPositionStatus cps = null;
		try {
			cps = getClientPositionStatusById(code);
			cps.setActiveFlag('N');
			clientPositionStatusRepository.save(cps);
		} catch (Exception e) {
			throw new Exception("id not available");
		}

	}

}
