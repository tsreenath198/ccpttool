package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientPositionStatus;

public interface IClientPositionStatusService {

	void addClientPositionStatus(ClientPositionStatus clientPositionStatus);

	List<ClientPositionStatus> getAllClientPositionStatus();

	ClientPositionStatus getClientPositionStatusById(String code);
	
	void updateClientPositionStatus(ClientPositionStatus clientPositionStatus) throws Exception;

	void deleteClientPositionStatus(String code) throws Exception;

//	ClientPositionStatus getClientPositionByCode(String code);

}
