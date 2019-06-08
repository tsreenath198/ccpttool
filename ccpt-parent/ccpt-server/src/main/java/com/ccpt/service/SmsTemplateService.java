package com.ccpt.service;

import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ccpt.model.SmsTemplate;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.SmsTemplateRepository;

@Component
public class SmsTemplateService extends BaseService<SmsTemplate, Integer> {

	public SmsTemplateService() {
		super("SMS Template");
	}

	@Autowired
	private SmsTemplateRepository smsTemplateRepository;

	@Override
	public BaseRepository<SmsTemplate, Integer> getRepository() {
		return smsTemplateRepository;
	}

	public SmsTemplate getTemplateByType(String type) {
		Optional<SmsTemplate> template = smsTemplateRepository.findByType(type);
		if (template.isPresent()) {
			return template.get();
		} else {
			throw new EntityNotFoundException("No SMS Template found for type : " + type);
		}
	}

}
