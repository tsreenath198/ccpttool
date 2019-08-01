package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientPositionRepository;

@Service
public class ClientPositionService extends BaseService<ClientPosition, Integer> {
	public ClientPositionService() {
		super("Client Position");
	}

	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

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

	public void deleteByClientId(Integer clientId) {
		clientPositionRepository.deleteByClientId(clientId);
	}

	@Override
	protected void postDelete(ClientPosition clientPosition) {
		List<ClientApplication> listOfCA = clientApplicationRepository
				.findByClientPositionIdAndActiveFlag(clientPosition.getId(), true);
		for (ClientApplication clientApplication : listOfCA) {
			clientApplication.setActiveFlag(false);
			clientApplication.setUpdatedDate(new Date());
		}
	}

	public List<DropDownStatistics> getAllCps() {
		return clientPositionRepository.getAllCps();
	}

	public List<DropDownStatistics> getAllClosedCps() {
		return clientPositionRepository.getAllClosedCps();
	}
}
