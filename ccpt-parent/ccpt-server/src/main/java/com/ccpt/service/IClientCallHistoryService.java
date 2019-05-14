package com.ccpt.service;

import java.util.Date;
import java.util.List;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ClientCallHistory;

public interface IClientCallHistoryService {
	List<ClientCallHistory> getAllClientCallHistorys();

	ClientCallHistory getClientCallHistoryById(int id) throws ResourceNotFoundException;

	boolean addClientCallHistory(ClientCallHistory clientCallHistory);

	void updateClientCallHistory(ClientCallHistory clientCallHistory);

	void deleteClientCallHistory(int id) throws ResourceNotFoundException;

	List<ClientCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate);
}
