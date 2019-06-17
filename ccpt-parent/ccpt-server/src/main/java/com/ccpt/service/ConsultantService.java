package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.Consultant;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ConsultantRepository;

@Service
public class ConsultantService extends BaseService<Consultant, Integer> {
	public ConsultantService() {
		super("Consultant");
	}

	@Autowired
	private ConsultantRepository consultantRepository;

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public BaseRepository<Consultant, Integer> getRepository() {
		return consultantRepository;
	}

	@Override
	protected void postDelete(Consultant consultant) {
		List<ClientApplication> listOfCAs = clientApplicationService
				.findByConsultantIdAndActiveFlag(consultant.getId());
		for (ClientApplication clientApplication : listOfCAs) {
			clientApplication.setActiveFlag(false);
			clientApplication.setUpdatedDate(new Date());
		}

	}

	public Consultant findByFullname(String fullname) {
		return consultantRepository.findByFullname(fullname);
	}

	public Consultant findByEmail(String email) {
		return consultantRepository.findByEmail(email);
	}

	public Consultant findByPhone(String phone) {
		return consultantRepository.findByPhone(phone);
	}

}
