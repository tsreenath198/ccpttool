package com.ccpt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	public ConsultantCallHistory getConsultantCallHistoryById(int id) {
		ConsultantCallHistory obj = consultantCallHistoryRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateConsultantCallHistory(ConsultantCallHistory consultantCallHistory) {
		getConsultantCallHistoryById(consultantCallHistory.getId()) ;
		consultantCallHistoryRepository.save(consultantCallHistory);

	}

	@Override
	public void addConsultantCallHistory(ConsultantCallHistory consultantCallHistory) {
		consultantCallHistoryRepository.save(consultantCallHistory);
	}

	@Override
	public List<ConsultantCallHistory> getAllConsultantCallHistorysFromLastGivenDays(Date sdate, Date edate) {
		return consultantCallHistoryRepository.getAllConsultantCallHistorysFromLastGivenDays(sdate, edate);
	}

}
