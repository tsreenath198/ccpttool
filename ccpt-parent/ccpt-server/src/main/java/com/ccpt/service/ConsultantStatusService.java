package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ConsultantStatus;
import com.ccpt.repository.ConsultantStatusRepository;

@Service
public class ConsultantStatusService implements IConsultantStatusService {
	@Autowired
	private ConsultantStatusRepository consultantStatusRepository;

	@Override
	public void addConsultantStatus(ConsultantStatus consultantStatus) {
		consultantStatusRepository.save(consultantStatus);

	}

	@Override
	public List<ConsultantStatus> getAllConsultantStatus() {
		List<ConsultantStatus> list = new ArrayList<>();
		consultantStatusRepository.findAll().forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ConsultantStatus getConsultantStatusById(String code) {
		ConsultantStatus obj = consultantStatusRepository.findById(code).get();
		return obj;
	}

	@Override
	public void updateClientPositionStatus(ConsultantStatus consultantStatus) {
		consultantStatusRepository.save(consultantStatus);
	}

	@Override
	public void deleteClientPositionStatus(String code) {
		consultantStatusRepository.delete(getConsultantCallHistoryByCode(code));
	}

	@Override
	public ConsultantStatus getConsultantCallHistoryByCode(String code) {
		ConsultantStatus obj = consultantStatusRepository.findById(code).get();
		return obj;
	}
}
