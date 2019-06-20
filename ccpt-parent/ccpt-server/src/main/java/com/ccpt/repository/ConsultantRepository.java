package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.ClientApplicationStatistics;
import com.ccpt.model.Consultant;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	List<Consultant> findByPhoneOrFullnameOrEmail(String phone, String fullname, String email);

	@Query(value = "SELECT id as id,fullname as name FROM Consultant")
	List<ClientApplicationStatistics> getAllConsultants();
}
