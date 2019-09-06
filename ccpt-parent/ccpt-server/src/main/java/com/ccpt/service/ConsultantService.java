package com.ccpt.service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;
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

	public List<Consultant> find(String fullname, String email, String phone) {
		return consultantRepository.findByPhoneOrFullnameOrEmail(phone, fullname, email);
	}

	@Override
	protected void postActivate(Consultant consultant) {
		Optional<Consultant> coOptional = consultantRepository.findById(consultant.getId());
		if (coOptional.isPresent()) {
			coOptional.get().setActiveFlag(true);
			coOptional.get().setUpdatedDate(new Date());
		}
	}

	public List<ConsultantStatistics> getAllConsultants() {
		return consultantRepository.getAllConsultants();
	}

	public List<Consultant> search(String searchKey) {
		return consultantRepository.search(searchKey);
	}

	public List<Consultant> getInactiveConsultants() {
		return consultantRepository.getInactiveConsultants();
	}

}
