package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.Payment;
import com.ccpt.model.PaymentStatistics;

public interface PaymentRepository extends BaseRepository<Payment, Integer> {

	@Query(value = "SELECT id as id ,generatedCode as companyName,candidateName as candidateName,joiningDate as joiningDate FROM Payment where paidStatus='Unpaid'")
	List<PaymentStatistics> get();

}
