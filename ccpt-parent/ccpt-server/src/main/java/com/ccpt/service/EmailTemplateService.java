package com.ccpt.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.ClientPosition;
import com.ccpt.model.EmailTemplate;
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

	public String getClientApps(List<Integer> ids) {
		StringBuilder body = new StringBuilder();
		List<String> names = new ArrayList<String>();
		List<ClientApplication> clientApplications = new ArrayList<ClientApplication>();
		for (Integer id : ids) {
			Optional<ClientApplication> ca = clientApplicationRepository.findById(id);
			String name = ca.get().getClientPosition().getClient().getName();
			names.add(name);
			clientApplications.add(ca.get());
		}
		boolean allEqual = names.isEmpty() || names.stream().allMatch(names.get(0)::equals);
		if (allEqual) {
			for (ClientApplication clientApplication : clientApplications) {
				ClientPosition clientPosition = clientApplication.getClientPosition();
				String template = JobDescriptionSubstitutor.appendTemplate(clientPosition);
				body.append(template);
			}
		}
//		 JobDescriptionSubstitutor.getSign(body);
		return JobDescriptionSubstitutor.getSign(body);

	}

}
