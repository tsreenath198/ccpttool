package com.ccpt.service;

import java.text.ParseException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.Day;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientCallHistoryRepository;
import com.ccpt.util.DateUtil;

@Service
public class ClientCallHistoryService extends BaseService<ClientCallHistory, Integer> {
	public ClientCallHistoryService() {
		super("Client Call History");
	}

	@Autowired
	private ClientCallHistoryRepository clientCallHistoryRepository;

	public List<ClientCallHistory> getAllClientCallHistorysFromLastGivenDays(Integer days) throws ParseException {
		Day day = DateUtil.getDays(days);
		return clientCallHistoryRepository.getAllClientCallHistorysFromLastGivenDays(day.getStartDate(),
				day.getEndDate(), true);
	}

	@Override
	public BaseRepository<ClientCallHistory, Integer> getRepository() {
		return clientCallHistoryRepository;
	}

	List<ClientCallHistory> findByClientPositionId(Integer clientPositionId) {
		return clientCallHistoryRepository.findByClientPositionIdAndActiveFlag(clientPositionId, true);
	}

	public List<CallHistorySummaryStatistics> getAllCchCountByRecruiters(Integer days) throws ParseException {
		Day day = DateUtil.getDays(days);
		return clientCallHistoryRepository.getAllCchCountByRecruiters(day.getStartDate(), day.getEndDate());
	}

	public List<ClientCallHistory> getAllCchByRecruiterId(Integer rId, Integer days) throws ParseException {
		Day day = DateUtil.getDays(days);
		return clientCallHistoryRepository.getAllCchByRecruiterId(rId, day.getStartDate(), day.getEndDate(), true);
	}

}
