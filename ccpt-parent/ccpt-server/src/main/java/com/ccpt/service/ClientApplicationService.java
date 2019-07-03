package com.ccpt.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ApplicationBody;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.InterviewSummaryStatistics;
import com.ccpt.model.PositionSummaryStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.PositionSummaryRepository;

@Service
public class ClientApplicationService extends BaseService<ClientApplication, Integer> {
	public ClientApplicationService() {
		super("Client Application");
	}

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Autowired
	private PositionSummaryRepository positionSummaryRepository;

	@Override
	public BaseRepository<ClientApplication, Integer> getRepository() {
		return clientApplicationRepository;
	}

	public List<ClientApplication> getAllActiveCAByCpID(Integer cpId) {
		return clientApplicationRepository.getAllActiveCAByCpID(cpId, "Rejected By Client");

	}

	public List<PositionSummaryStatistics> getAllActiveCACount() {
		return positionSummaryRepository.getAllActiveCACount();
	}

	public Integer checkPositionWithConsultant(Integer cpId, Integer consultantId) {
		return clientApplicationRepository.checkPositionWithConsultant(cpId, consultantId);
	}

	public List<InterviewSummaryStatistics> getAllOneWeekInterviews() {
		Date today = new Date();
		Date week = new Date();
		Calendar c = Calendar.getInstance();
		c.setTime(week);
		c.add(Calendar.DATE, 6);
		week = c.getTime();
		return clientApplicationRepository.getAllInterviewsToday(today, week);
	}

	public List<ClientApplication> findByConsultantIdAndActiveFlag(Integer consultantId) {
		return clientApplicationRepository.findByConsultantIdAndActiveFlag(consultantId, true);
	}

	public ApplicationBody showBodyMail(Integer caId) {
		// TODO Auto-generated method stub
		Optional<ClientApplication> clientApplication = clientApplicationRepository.findByIdAndActiveFlag(caId, true);
		ClientApplication ca = null;
		if (clientApplication.isPresent()) {
			ca = clientApplication.get();
		} else {
			throw new EntityNotFoundException("Could not find ClientApplication for id : " + caId);
		}
		ApplicationBody body = new ApplicationBody();

		if (ca.getConsultant() != null && ca.getClientPosition() != null) {
			body.setFullname(ca.getConsultant().getFullname());
			body.setRole(ca.getClientPosition().getRole());
			body.setDescription(ca.getConsultant().getDescription());
			body.setExpectedCTC(ca.getConsultant().getExpectedCTC());
			body.setNoticePeriod(ca.getConsultant().getNoticePeriod());
			body.setCurrentCTC(ca.getConsultant().getCurrentCTC());
			body.setCpLocation(ca.getClientPosition().getLocation());
			body.setConLocation(ca.getConsultant().getCurrentLocation());
			body.setExperienceYrs(ca.getConsultant().getExperienceYrs());
			body.setExperienceMonths(ca.getConsultant().getExperienceMonths());
		} else {
			throw new EntityNotFoundException(
					"Could not find ClientPosition and Consultant for  clientApplication id:" + ca.getId());
		}
		return body;
	}

}
