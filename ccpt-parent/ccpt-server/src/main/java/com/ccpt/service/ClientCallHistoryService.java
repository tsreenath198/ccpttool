package com.ccpt.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ClientCallHistory;
import com.ccpt.model.Day;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientCallHistoryRepository;

@Service
public class ClientCallHistoryService extends BaseService<ClientCallHistory, Integer> {
	public ClientCallHistoryService() {
		super("Client Call History");
	}

	@Autowired
	private ClientCallHistoryRepository clientCallHistoryRepository;

	public List<ClientCallHistory> getAllClientCallHistorysFromLastGivenDays(Integer days) {
		Day day = getDays(days);
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

	public List<CallHistorySummaryStatistics> getAllCchCountByRecruiters(Integer days) {
		Day day = getDays(days);
		return clientCallHistoryRepository.getAllCchCountByRecruiters(day.getStartDate(), day.getEndDate());
	}

	public List<ClientCallHistory> getAllCchByRecruiterId(Integer rId, Integer days) {
		Day day = getDays(days);
		return clientCallHistoryRepository.getAllCchByRecruiterId(rId, day.getStartDate(), day.getEndDate(), true);
	}

	public Day getDays(Integer days) {
		Day day = new Day();
		Calendar cal = Calendar.getInstance();
		cal.add(Calendar.DATE, -days);
		day.setStartDate(cal.getTime());
		day.setEndDate(new Date());
		return day;
	}
}
