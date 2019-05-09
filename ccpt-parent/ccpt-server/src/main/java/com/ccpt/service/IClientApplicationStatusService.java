package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientApplicationStatus;

public interface IClientApplicationStatusService {

	void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus);

	List<ClientApplicationStatus> getAllClientApplications();

	ClientApplicationStatus getClientApplicationStatusById(String code);

	void updateClientApplicationStatus(ClientApplicationStatus clientApplicationStatus);

	void deleteClientApplicationStatus(String code);

	ClientApplicationStatus getConsultantCallHistoryByCode(String code);
}
