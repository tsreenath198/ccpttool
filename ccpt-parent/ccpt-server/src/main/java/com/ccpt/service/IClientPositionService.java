package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientPosition;

public interface IClientPositionService {
	List<ClientPosition> getAllClientPositions();

	ClientPosition getClientPositionById(int id);

	void addClientPosition(ClientPosition clientPosition);

	void updateClientPosition(ClientPosition clientPosition);

	void deleteClientPosition(int id);

	List<ClientPosition> getTop5ClientPositions();

	List<ClientPosition> getAllOpenCP();
}
