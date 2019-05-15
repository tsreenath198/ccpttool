package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientPosition;

public interface IClientPositionService {
	List<ClientPosition> getAllClientPositions();

	ClientPosition getClientPositionById(int id);

	boolean addClientPosition(ClientPosition clientPosition);

	void updateClientPosition(ClientPosition clientPosition);

	void deleteClientPosition(int id);
}
