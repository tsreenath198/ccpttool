package com.ccpt.service;

import java.util.Date;
import java.util.List;

import com.ccpt.model.ClientCallHistory;

public interface IClientCallHistoryService {
	List<ClientCallHistory> getAllClientCallHistorys();

	ClientCallHistory getClientCallHistoryById(int id);

	boolean addClientCallHistory(ClientCallHistory clientCallHistory);

	void updateClientCallHistory(ClientCallHistory clientCallHistory);

	List<ClientCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate);
}
