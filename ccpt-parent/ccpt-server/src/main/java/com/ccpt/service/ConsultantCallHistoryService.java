package com.ccpt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.repository.ConsultantCallHistoryRepository;

@Service
public class ConsultantCallHistoryService implements IConsultantCallHistoryService {
	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;

	@Override
	public List<ConsultantCallHistory> getAllConsultantCallHistorys() {
		List<ConsultantCallHistory> list = new ArrayList<>();
		consultantCallHistoryRepository.findAllByOrderByUpdatedDateDesc().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ConsultantCallHistory getConsultantCallHistoryById(int id) throws ResourceNotFoundException {
		ConsultantCallHistory obj = consultantCallHistoryRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No data found on id:: " + id));
		return obj;
	}

	@Override
	public void updateConsultantCallHistory(ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryRepository.save(consultantCallHistory);

	}

	@Override
	public void deleteConsultantCallHistory(int id) throws ResourceNotFoundException {
		consultantCallHistoryRepository.delete(getConsultantCallHistoryById(id));

	}

	@Override
	public boolean addConsultantCallHistory(ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryRepository.save(consultantCallHistory);
		return true;
	}

	@Override
	public List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate) {
		return consultantCallHistoryRepository.getAllConsultantCallHistorysFromLastGivenDays(sdate, edate);
	}

}
