package com.ccpt.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.CallHistorySummaryStatistics;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.model.Day;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantCallHistoryRepository;

@Service
public class ConsultantCallHistoryService extends BaseService<ConsultantCallHistory, Integer> {
	public ConsultantCallHistoryService() {
		super("Consultant Call History");
	}

	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;

	public List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Integer days) {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllConsultantCallHistorysFromLastGivenDays(day.getStartDate(),
				day.getEndDate(), true);
	}

	public List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(Integer days) {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getClosedCountOfAllRecruitersFromLastGivenDays(day.getStartDate(),
				day.getEndDate());
	}

	@Override
	public BaseRepository<ConsultantCallHistory, Integer> getRepository() {
		return consultantCallHistoryRepository;
	}

	public List<CallHistorySummaryStatistics> getAllconCHCountByRecruiters(Integer days) {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllconCHCountByRecruiters(day.getStartDate(), day.getEndDate());
	}

	public List<ConsultantCallHistory> getAllconCHByRecruiterId(Integer rId, Integer days) {
		Day day = getDays(days);
		return consultantCallHistoryRepository.getAllconCHByRecruiterId(rId, day.getStartDate(), day.getEndDate(),
				true);
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
