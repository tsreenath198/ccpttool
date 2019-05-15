package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Consultant;

public interface IConsultantService {
	List<Consultant> getAllConsultants();

	Consultant getConsultantById(int id);

	boolean addConsultant(Consultant consultant);

	void updateConsultant(Consultant consultant);

}
