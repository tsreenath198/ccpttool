package com.ccpt.service;

import java.util.Date;
import java.util.List;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.ConsultantCallHistory;

public interface IConsultantCallHistoryService {
	List<ConsultantCallHistory> getAllConsultantCallHistorys();

	ConsultantCallHistory getConsultantCallHistoryById(int id);

	void addConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	void updateConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate);

	List<Object[]> getClosedCountOfAllRecruitersFromLastGivenDays(Date startDate, Date endDate);
}
