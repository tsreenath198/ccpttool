package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.SMS;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.SMSRepository;

@Service
public class SMSService extends BaseService<SMS, Integer> {
	@Autowired
	private SMSRepository smsRepository;

	@Override
	public BaseRepository<SMS, Integer> getRepository() {
		return smsRepository;
	}

}