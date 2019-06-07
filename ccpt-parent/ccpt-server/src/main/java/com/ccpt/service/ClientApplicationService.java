package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;

@Service
public class ClientApplicationService extends BaseService<ClientApplication, Integer> {
	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Override
	public BaseRepository<ClientApplication, Integer> getRepository() {
		return clientApplicationRepository;
	}
	public List<ClientApplication> getAllActiveCAByCpID(Integer cpId) {
		return clientApplicationRepository.getAllActiveCAByCpID(cpId, "ACTIVE");

		}

		public Integer getAllActiveCACountByCpID(Integer cpId) {
		return clientApplicationRepository.getAllActiveCACountByCpID(cpId, "ACTIVE");
		}
}
