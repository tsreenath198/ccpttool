package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	List<Consultant> findByPhoneOrFullnameOrEmail(String phone, String fullname, String email);

	@Query(value = "SELECT id as id,fullname as name,email as email,phone as phone FROM Consultant WHERE active_flag=1 AND status_code != 'Inactive' ORDER BY createdDate ASC")
	List<ConsultantStatistics> getAllConsultants();
}
