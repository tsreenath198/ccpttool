package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ConsultantStatus;

public interface IConsultantStatusService {

	void addConsultantStatus(ConsultantStatus consultantStatus);

	List<ConsultantStatus> getAllConsultantStatus();

	ConsultantStatus getConsultantStatusById(String code);

	void updateConsultantStatus(ConsultantStatus consultantStatus) throws Exception;

	void deleteConsultantStatus(String code) throws Exception;

}
