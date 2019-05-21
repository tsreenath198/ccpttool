package com.ccpt.service;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantCallHistory;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ConsultantCallHistoryRepository;
import com.ccpt.repository.ConsultantRepository;

@Service
public class ConsultantService implements IConsultantService {
	@Autowired
	private ConsultantRepository consultantRepository;

	@Autowired
	private ConsultantCallHistoryRepository consultantCallHistoryRepository;
	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Autowired
	private IClientApplicationService clientApplicationService;

	@Override
	public List<Consultant> getAllConsultants() {
		List<Consultant> list = new ArrayList<>();
		consultantRepository.findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc("Y").forEach(e -> list.add(e));
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

	@Override
	public void deleteConsulatantRefs(Consultant consultant) {
		// delete consultanat call history
		List<ConsultantCallHistory> consultantCallHistoryList = consultantCallHistoryRepository
				.getConsultantCallHistoryFromConsultantId(consultant.getId());
		for (ConsultantCallHistory cch : consultantCallHistoryList) {
			cch.setActiveFlag('N');
			cch.setUpdatedDate(new Date());
			consultantCallHistoryRepository.save(cch);
		}

		// delete client application

		List<ClientApplication> clientApplication = clientApplicationRepository
				.getClientApplicationByConsultantId(consultant.getId());
		for (ClientApplication ca : clientApplication) {
			ca.setActiveFlag('N');
			ca.setUpdatedDate(new Date());
			clientApplicationService.addClientApplication(ca);
		}

	}

}
