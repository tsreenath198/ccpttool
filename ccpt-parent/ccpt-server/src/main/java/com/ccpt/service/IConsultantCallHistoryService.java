package com.ccpt.service;

import java.util.Date;
import java.util.List;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ConsultantCallHistory;

public interface IConsultantCallHistoryService {
	List<ConsultantCallHistory> getAllConsultantCallHistorys();

	ConsultantCallHistory getConsultantCallHistoryById(int id) throws ResourceNotFoundException;

	boolean addConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	void updateConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	void deleteConsultantCallHistory(int id) throws ResourceNotFoundException;

	List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate);
}
