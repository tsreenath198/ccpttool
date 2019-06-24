package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Payment;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.PaymentRepository;

@Service
public class PaymentService extends BaseService<Payment, Integer> {

	public PaymentService() {
		super("Payment");
	}

	@Autowired
	private PaymentRepository paymentRepository;

	@Override
	public BaseRepository<Payment, Integer> getRepository() {
		return paymentRepository;
	}

}
