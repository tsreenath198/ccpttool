package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.exception.CAException;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.EmailContent;
import com.ccpt.model.EmailTemplate;
import com.ccpt.model.UploadFile;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.ClientApplicationRepository;
import com.ccpt.repository.EmailTemplateRepository;
import com.ccpt.substitutor.JobDescriptionSubstitutor;

@Component
public class EmailTemplateService extends BaseService<EmailTemplate, Integer> {

	public EmailTemplateService() {
		super("Email Template");
	}

	@Autowired
	private UploadFileService uploadFileService;
	@Autowired
	private EmailTemplateRepository emailTemplateRepository;

	@Autowired
	private ClientApplicationRepository clientApplicationRepository;

	@Override
	public BaseRepository<EmailTemplate, Integer> getRepository() {
		return emailTemplateRepository;
	}

	public EmailTemplate getTemplateByType(String type) {
		Optional<EmailTemplate> template = emailTemplateRepository.findByType(type);
		if (template.isPresent()) {
			return template.get();
		} else {
			throw new EntityNotFoundException("No Email Template found for type : " + type);
		}
	}

	public EmailContent getClientApps(List<Integer> ids) throws Exception {
		EmailContent emailContent = new EmailContent();
		StringBuilder body = new StringBuilder();
		List<String> names = new ArrayList<String>();
		List<UploadFile> files = new ArrayList<UploadFile>();
		List<ClientApplication> clientApplications = new ArrayList<ClientApplication>();
		List<String> cpNames = new ArrayList<String>();
		for (Integer id : ids) {
			Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
			String name = ca.get().getClientPosition().getClient().getName();
			names.add(name);
			clientApplications.add(ca.get());

		}
		boolean allEqual = names.isEmpty() || names.stream().allMatch(names.get(0)::equals);
		if (allEqual) {
			for (ClientApplication clientApplication : clientApplications) {
				String template = JobDescriptionSubstitutor.appendCATemplate(clientApplication);
				files.add(uploadFileService.getByRefIdAndRefType(clientApplication.getConsultant().getId(),
						"Consultant"));
				body.append(template);
				String name = clientApplication.getClientPosition().getClient().getName();
				names.add(name);
				cpNames.add(clientApplication.getClientPosition().getRole());
			}
		} else {
			throw new CAException("please select same client application ");
		}
		emailContent.setBody(JobDescriptionSubstitutor.getSign(body));
		emailContent.setUploadFiles(files);
		emailContent.setToEmails(
				clientApplications.get(0).getClientPosition().getClient().getClientContacts().get(0).getEmail());
		emailContent.setSubject("Shorlisted candidates for " + cpNames);
		return emailContent;
	}
}
