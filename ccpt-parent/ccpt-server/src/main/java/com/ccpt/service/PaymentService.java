package com.ccpt.service;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Payment;
import com.ccpt.model.PaymentStatistics;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.PaymentRepository;
import com.ccpt.util.ExcelWriter;

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

	public byte[] downloadExcel(Integer paymentId, HttpServletResponse httpServletResponse) throws IOException {
		Payment payment = get(paymentId);
		return ExcelWriter.downloadExcel(payment, httpServletResponse);
	}

	public List<PaymentStatistics> get() {
		return paymentRepository.get();
	}
}
