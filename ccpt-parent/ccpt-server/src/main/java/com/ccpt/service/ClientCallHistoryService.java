package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientCallHistory;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientCallHistoryRepository;

@Service
public class ClientCallHistoryService extends BaseService<ClientCallHistory, Integer> {
	public ClientCallHistoryService() {
		super("Client Call History");
	}

	@Autowired
	private ClientCallHistoryRepository clientCallHistoryRepository;

	public List<ClientCallHistory> getAllClientCallHistorysFromLastGivenDays(Date sdate, Date edate) {
		return clientCallHistoryRepository.getAllClientCallHistorysFromLastGivenDays(sdate, edate, true);
	}

	@Override
	public BaseRepository<ClientCallHistory, Integer> getRepository() {
		return clientCallHistoryRepository;
	}

}
