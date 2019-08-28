package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ApplicationBody;
import com.ccpt.model.CAByStatus;
import com.ccpt.model.CAByStatusHelper;
import com.ccpt.model.CAStatistics;
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
		return clientApplicationRepository.getAllActiveCAByCpID(cpId);

	}

	public List<PositionSummaryStatistics> getAllActiveCACount() {
		return positionSummaryRepository.getAllActiveCACount();
	}

	public Integer checkPositionWithConsultant(Integer cpId, Integer consultantId) {
		return clientApplicationRepository.checkPositionWithConsultant(cpId, consultantId);
	}

	public List<InterviewSummaryStatistics> getAllInterviewsFromToday() {
		return clientApplicationRepository.getAllInterviewsFromToday();
	}

	public List<ClientApplication> findByConsultantIdAndActiveFlag(Integer consultantId) {
		return clientApplicationRepository.findByConsultantIdAndActiveFlag(consultantId, true);
	}

	public ApplicationBody showBodyMail(Integer caId) {
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

	public List<CAStatistics> getJobConfirmedCAs() {
		List<CAStatistics> listOfCAStatistics = new ArrayList<CAStatistics>();
		List<ClientApplication> listOfCAs = clientApplicationRepository.getJobConfirmedCAs();
		for (ClientApplication clientApplication : listOfCAs) {
			CAStatistics caStatistics = new CAStatistics();
			caStatistics.setId(clientApplication.getId());
			caStatistics.setName(clientApplication.getConsultant().getFullname() + "-"
					+ clientApplication.getClientPosition().getGeneratedCode());
			listOfCAStatistics.add(caStatistics);
		}
		return listOfCAStatistics;
	}

	public List<ClientApplication> search(Integer clientId) {
		return clientApplicationRepository.search(clientId);
	}

	public List<CAByStatusHelper> getAllCAbyStatus() {
		List<String> statusCodes = clientApplicationRepository.getAllDistinctStatusCode();
		List<Integer> clintPositionIds = clientApplicationRepository.getAllDistinctClientPositionId();

		List<CAByStatus> clientPositioncountByStatusCode = null;
		List<CAByStatusHelper> list = new ArrayList<CAByStatusHelper>();
		for (int i = 0; i < statusCodes.size(); i++) {
			clientPositioncountByStatusCode = new ArrayList<CAByStatus>();
			String statuscode = statusCodes.get(i);
			for (int j = 0; j < clintPositionIds.size(); j++) {
				Integer clientPositionId = clintPositionIds.get(j);
				clientPositioncountByStatusCode = clientApplicationRepository
						.getclientPositioncountByStatusCode(statuscode, clientPositionId);
				for (CAByStatus caByRecruiterObj : clientPositioncountByStatusCode) {
					CAByStatusHelper caByRecruitersHelperObj = new CAByStatusHelper();
					caByRecruitersHelperObj.setId(i + 1);
					caByRecruitersHelperObj.setClientName(caByRecruiterObj.getClientName());
					caByRecruitersHelperObj.setStatusCode(statuscode);
					caByRecruitersHelperObj.setCount(caByRecruiterObj.getCount());
					list.add(caByRecruitersHelperObj);
				}
			}
		}
		return list;
	}

	public List<CAStatistics> getCAStatistics() {
		List<CAStatistics> listOfCAStatistics = new ArrayList<CAStatistics>();
		List<ClientApplication> listOfCAs = clientApplicationRepository
				.findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(true);
		for (ClientApplication clientApplication : listOfCAs) {
			CAStatistics caStatistics = new CAStatistics();
			caStatistics.setId(clientApplication.getId());
			caStatistics.setName(clientApplication.getConsultant().getFullname() + "-"
					+ clientApplication.getClientPosition().getGeneratedCode());
			listOfCAStatistics.add(caStatistics);
		}
		return listOfCAStatistics;
	}

}
