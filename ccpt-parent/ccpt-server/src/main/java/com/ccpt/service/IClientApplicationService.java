package com.ccpt.service;

import java.util.List;

import com.ccpt.model.ClientApplication;

public interface IClientApplicationService {
	List<ClientApplication> getAllClientApplications();

	ClientApplication getClientApplicationById(int id);

	boolean addClientApplication(ClientApplication clientApplication);

	void updateClientApplication(ClientApplication clientApplication);

	void deleteClientApplication(int id);
}
