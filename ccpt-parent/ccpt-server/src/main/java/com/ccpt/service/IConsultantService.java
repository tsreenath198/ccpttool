package com.ccpt.service;

import java.util.List;

import com.ccpt.exception.ResourceNotFoundException;
import com.ccpt.model.Consultant;

public interface IConsultantService {
	List<Consultant> getAllConsultants();

	Consultant getConsultantById(int id) throws ResourceNotFoundException;

	boolean addConsultant(Consultant consultant);

	void updateConsultant(Consultant consultant);

	void deleteConsultant(int id) throws ResourceNotFoundException;
}
