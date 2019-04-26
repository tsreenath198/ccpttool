package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientCallHistory;

public interface IClientCallHistoryService {
	List<ClientCallHistory> getAllClientCallHistorys();

	ClientCallHistory getClientCallHistoryById(int id);

	boolean addClientCallHistory(ClientCallHistory clientCallHistory);

	void updateClientCallHistory(ClientCallHistory clientCallHistory);

	void deleteClientCallHistory(int id);
}
