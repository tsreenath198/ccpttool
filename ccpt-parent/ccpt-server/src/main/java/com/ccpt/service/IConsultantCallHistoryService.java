package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ConsultantCallHistory;

public interface IConsultantCallHistoryService {
	List<ConsultantCallHistory> getAllConsultantCallHistorys();

	ConsultantCallHistory getConsultantCallHistoryById(int id);

	boolean addConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	void updateConsultantCallHistory(ConsultantCallHistory consultantCallHistory);

	void deleteConsultantCallHistory(int id);
}
