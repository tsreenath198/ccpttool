package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Consultant;
import com.ccpt.repository.ConsultantRepository;

@Service
public class ConsultantService implements IConsultantService {
	@Autowired
	private ConsultantRepository consultantRepository;

	@Override
	public List<Consultant> getAllConsultants() {
		List<Consultant> list = new ArrayList<>();
		consultantRepository.findByActiveFlagAllIgnoreCaseOrderByUpdatedDateDesc("Y").forEach(e -> list.add(e));
		return list;
	}

	@Override
	public Consultant getConsultantById(int id) {
		Consultant obj = consultantRepository.findByIdAndActiveFlag(id, 'Y');
		if (obj != null)
			return obj;
		throw new EntityNotFoundException("No data found on id:: " + id);
	}

	@Override
	public void updateConsultant(Consultant consultant) {
		getConsultantById(consultant.getId());
		consultantRepository.save(consultant);

	}

	@Override
	public void addConsultant(Consultant consultant) {
		consultantRepository.save(consultant);
	}

}
