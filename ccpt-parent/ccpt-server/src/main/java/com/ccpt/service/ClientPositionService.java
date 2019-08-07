package com.ccpt.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import com.ccpt.controller.EmailController;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.model.EmailContent;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientPositionRepository;

@Service
public class ClientPositionService extends BaseService<ClientPosition, Integer> {

	@Value("${spring.mail.username}")
	private String cc;

	public ClientPositionService() {
		super("Client Position");
	}

	@Autowired
	private ClientPositionRepository clientPositionRepository;

	@Autowired
	private EmailController emailController;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	public List<ClientPosition> getTop5ClientPositions() {
		return clientPositionRepository.findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(true);
	}

	public List<ClientPosition> getAllOpenCP() {
		return clientPositionRepository.getAllOpenCP();
	}

	@Override
	public BaseRepository<ClientPosition, Integer> getRepository() {
		return clientPositionRepository;
	}

	public void deleteByClientId(Integer clientId) {
		clientPositionRepository.deleteByClientId(clientId);
	}

	@Override
	protected void postDelete(ClientPosition clientPosition) {
		List<ClientApplication> listOfCA = clientApplicationRepository
				.findByClientPositionIdAndActiveFlag(clientPosition.getId(), true);
		for (ClientApplication clientApplication : listOfCA) {
			clientApplication.setActiveFlag(false);
			clientApplication.setUpdatedDate(new Date());
		}
	}

	public List<DropDownStatistics> getAllCps() {
		return clientPositionRepository.getAllCps();
	}

	@Override
	protected void notify(ClientPosition existing, ClientPosition result) {
		EmailContent emailContent = new EmailContent();
		StringBuilder sb = null;
		emailContent.setCc(cc);
		if (existing.getCreatedDate() != null) {
			sb = new StringBuilder();
			emailContent.setSubject(" ClientPosition : " + existing.getGeneratedCode() + " is Saved And Assigned To "
					+ existing.getAssignedTo().getFullname() + ",");
			emailContent.setToEmails(existing.getAssignedTo().getEmail());
			sb.append("Hi," + existing.getAssignedTo().getFullname());
			sb.append("<p>");
			sb.append("ClientPosition is: " + existing.getGeneratedCode() + " is no.of positions : "
					+ existing.getRequiredPositions() + " is Assigned to You,<p>This Position Required Role is "
					+ existing.getRole() + " And RequiredSkills is " + existing.getRequiredSkills());
			emailContent.setBody(sb.toString());
			try {
				emailController.sendEmail(emailContent);
			} catch (Exception e) {
				e.printStackTrace();
			}

		} else {
			sb = new StringBuilder();
			if (existing.getAssignedTo().getId() == result.getAssignedTo().getId()) {
				emailContent.setSubject(" ClientPosition : " + existing.getGeneratedCode() + " is Updated "
						+ result.getAssignedTo().getFullname() + ",");
			} else {
				emailContent.setSubject(" ClientPosition : " + existing.getGeneratedCode()
						+ " is Updated And Assigned To " + result.getAssignedTo().getFullname() + ",");
			}
			emailContent.setToEmails(result.getAssignedTo().getEmail());
			emailContent.setBcc(existing.getAssignedTo().getEmail());
			sb.append("Hi," + result.getAssignedTo().getFullname());
			sb.append("<p>");
			sb.append("This ClientPosition is: " + result.getGeneratedCode() + " With no.of positions : "
					+ result.getRequiredPositions() + " is newly Assigned to : " + result.getAssignedTo().getFullname()
					+ ",<p>This Position Required Role is " + existing.getRole() + " And RequiredSkills is "
					+ existing.getRequiredSkills());
			emailContent.setBody(sb.toString());
			try {
				emailController.sendEmail(emailContent);
			} catch (Exception e) {
				e.printStackTrace();
			}

		}
	}

}
