package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantCallHistoryRepository;

@Service
public class ConsultantCallHistoryService extends BaseService<ConsultantCallHistory, Integer> {
	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;

	public List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate) {
		return consultantCallHistoryRepository.getAllConsultantCallHistorysFromLastGivenDays(sdate, edate, "Y");
	}

	public List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(Date startDate, Date endDate) {
		return consultantCallHistoryRepository.getClosedCountOfAllRecruitersFromLastGivenDays(startDate, endDate);
	}

	@Override
	public BaseRepository<ConsultantCallHistory, Integer> getRepository() {
		return consultantCallHistoryRepository;
	}

}
