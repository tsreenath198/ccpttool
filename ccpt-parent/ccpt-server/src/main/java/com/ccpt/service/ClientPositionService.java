package com.ccpt.service;

import java.text.ParseException;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import com.ccpt.model.BaseReturn;
import com.ccpt.model.CP;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;
import com.ccpt.model.EmailContent;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.ClientPositionRepository;
import com.ccpt.substitutor.JobDescriptionSubstitutor;

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
	private EmailService emailService;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	public List<ClientPosition> getTop5ClientPositions() {
		return clientPositionRepository.findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(true);
	}

	public List<ClientPosition> getAllOpenCP() {
		return clientPositionRepository.getAllOpenCP();
	}

	public List<ClientPosition> getLastWeekDyingCP(Integer days) throws ParseException {
		return clientPositionRepository.getLastWeekDyingCP(days);
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
				.findByClientPositionIdAndActiveFlagOrderByCreatedDateDesc(clientPosition.getId(), true);
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
		if (existing == result || existing.getAssignedTo().getId() != result.getAssignedTo().getId()) {
			EmailContent emailContent = new EmailContent();
			emailContent.setToEmails(result.getAssignedTo().getEmail());
			emailContent.setSubject("New Position assigned to you  : " + result.getGeneratedCode());
			emailContent.setTarget(result.getAssignedTo().getEmail());
			StringBuilder sb = new StringBuilder();
			sb.append("Hi").append(result.getAssignedTo().getFullname()).append(",").append("<p>")
					.append(existing.getGeneratedCode())
					.append(" is assigned to you. please review and start working on it.").append("</p>")
					.append(JobDescriptionSubstitutor.getSign(new StringBuilder()));
			emailContent.setBody(sb.toString());
			try {
				emailService.sendEmailWithAttachments(emailContent.getToEmails(), emailContent.getSubject(),
						emailContent.getBody(), emailContent.getCc(), emailContent.getBcc(),
						emailContent.getUploadFiles());
			} catch (Exception e) {
				e.printStackTrace();
			}
		} else {
			EmailContent emailContent = new EmailContent();
			emailContent.setToEmails(result.getAssignedTo().getEmail());
			emailContent.setSubject("Position Information updated for : " + result.getGeneratedCode());
			emailContent.setTarget(existing.getAssignedTo().getEmail());
			StringBuilder sb = new StringBuilder();
			sb.append("Hi").append(existing.getAssignedTo().getFullname()).append(",").append("<p>")
					.append(existing.getGeneratedCode()).append(" has been updated. please review the changes.")
					.append("</p>").append(JobDescriptionSubstitutor.getSign(new StringBuilder()));
			;
			emailContent.setBody(sb.toString());
			try {
				emailService.sendEmailWithAttachments(emailContent.getToEmails(), emailContent.getSubject(),
						emailContent.getBody(), emailContent.getCc(), emailContent.getBcc(),
						emailContent.getUploadFiles());
			} catch (Exception e) {
				e.printStackTrace();
			}
		}

	}

	public BaseReturn getAllByStatus(Integer pageNo, Integer pageSize, String sortBy, String status) {
		BaseReturn returnObj = new BaseReturn();
		Pageable paging = PageRequest.of(pageNo, pageSize, Sort.by(sortBy));
		Page<ClientPosition> p = clientPositionRepository.getAllByStatus(status, paging);
		returnObj.setNoOfRecords(p.getTotalElements());
		returnObj.setList(p.getContent());
		return returnObj;
	}

	public void updatePosting(CP model) {
		ClientPosition cp = get(model.getId());
		cp.setAlmaConnectURL(model.getAlmaConnectURL());
		cp.setNaukriURL(model.getNaukriURL());
		cp.setShineURL(model.getShineURL());
		save(cp);
	}

	public List<ClientPosition> getEmptyData() {
		return clientPositionRepository.getEmptyData();
	}

}
