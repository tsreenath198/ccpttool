package com.ccpt.service;

import java.util.Calendar;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
