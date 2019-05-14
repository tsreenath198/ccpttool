package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.exception.ResourceNotFoundException;
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
	public Consultant getConsultantById(int id) throws ResourceNotFoundException {
		Consultant obj = consultantRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("No data found on id:: " + id));
		return obj;
	}

	@Override
	public void updateConsultant(Consultant consultant) {
		consultantRepository.save(consultant);

	}

	@Override
	public void deleteConsultant(int id) throws ResourceNotFoundException {
		consultantRepository.delete(getConsultantById(id));

	}

	@Override
	public boolean addConsultant(Consultant consultant) {
		consultantRepository.save(consultant);
		return true;
	}

}
