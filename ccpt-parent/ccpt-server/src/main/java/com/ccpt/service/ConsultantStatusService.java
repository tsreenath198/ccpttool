package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

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
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on code:: " + code);
	}

	@Override
	public void updateConsultantStatus(ConsultantStatus consultantStatus) {

		getConsultantStatusById(consultantStatus.getCode());
		consultantStatusRepository.save(consultantStatus);
	}

	@Override
	public void deleteConsultantStatus(String code) {

		ConsultantStatus cs = getConsultantStatusById(code);
		cs.setActiveFlag('N');
		consultantStatusRepository.save(cs);
	}

}
