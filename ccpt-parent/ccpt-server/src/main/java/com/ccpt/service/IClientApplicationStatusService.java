package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.ClientPositionStatus;
import com.ccpt.model.ConsultantStatus;

public interface IClientApplicationStatusService {

	void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus);

	List<ClientApplicationStatus> getAllClientApplications();

	List<ClientPositionStatus> getAllClientPositionStatus();

	List<ConsultantStatus> getAllConsultantStatus();
}
