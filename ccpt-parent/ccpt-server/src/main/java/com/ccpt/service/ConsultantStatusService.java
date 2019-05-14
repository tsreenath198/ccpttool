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
		consultantStatusRepository.findByActiveFlagAllIgnoreCase("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public ConsultantStatus getConsultantStatusById(String code) {
		ConsultantStatus obj = consultantStatusRepository.findByCodeAndActiveFlag(code, 'Y');
		return obj;
	}

	@Override
	public void updateConsultantStatus(ConsultantStatus consultantStatus) throws Exception {
		
		try {
			getConsultantStatusById(consultantStatus.getCode());
			consultantStatusRepository.save(consultantStatus);
		} catch (Exception e) {
			throw new Exception("id not available");
		}
		
	}

	@Override
	public void deleteConsultantStatus(String code) throws Exception {
		
		ConsultantStatus cs = null;
		try {
			cs = getConsultantStatusById(code);
			cs.setActiveFlag('N');
			consultantStatusRepository.save(cs);
		} catch (Exception e) {
			throw new Exception("id not available");
		}
		
//		consultantStatusRepository.delete(getConsultantCallHistoryByCode(code));
	}

	/*@Override
	public ConsultantStatus getConsultantCallHistoryByCode(String code) {
		ConsultantStatus obj = consultantStatusRepository.findById(code).get();
		return obj;
	}*/
}
