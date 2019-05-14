package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientApplicationStatus;

public interface IClientApplicationStatusService {

	void addClientApplicationStatus(ClientApplicationStatus clientApplicationStatus);

	List<ClientApplicationStatus> getAllClientApplications();

	ClientApplicationStatus getClientApplicationStatusById(String code);

	void updateClientApplicationStatus(ClientApplicationStatus clientApplicationStatus) throws Exception;

	void deleteClientApplicationStatus(String code) throws Exception;

	ClientApplicationStatus getConsultantCallHistoryByCode(String code);
}
