package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientPositionStatus;

public interface IClientPositionStatusService {

	void addClientPositionStatus(ClientPositionStatus clientPositionStatus);

	List<ClientPositionStatus> getAllClientPositionStatus();

	ClientPositionStatus getClientPositionStatusById(String code);

}
