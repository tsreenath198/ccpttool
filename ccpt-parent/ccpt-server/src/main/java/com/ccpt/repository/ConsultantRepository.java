package com.ccpt.repository;

import java.awt.print.Pageable;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	List<Consultant> findByPhoneOrFullnameOrEmail(String phone, String fullname, String email);

	@Query(value = "SELECT id as id,fullname as name,email as email,phone as phone FROM Consultant WHERE active_flag=1 AND status_code != 'Inactive' ORDER BY createdDate DESC")
	List<ConsultantStatistics> getAllConsultants();

	@Query(value = "SELECT * FROM consultant WHERE active_flag=1 AND CONCAT(fullname, '',email, '',skills, '',phone) LIKE %:searchKey%", nativeQuery = true)
	List<Consultant> search(@Param(value = "searchKey") String searchKey);

	@Query("SELECT DISTINCT c FROM  Consultant c,ConsultantStatus cs WHERE (c.phone IS NULL OR c.phone ='' OR c.email IS NULL OR c.email ='' OR c.skills IS NULL OR c.skills ='' OR c.highestEducation IS NULL OR c.highestEducation ='' AND c.status = cs.code AND cs.statusType='Active') AND c.activeFlag=1 ")
	List<Consultant> getInactiveConsultants();

	@Query(value = "SELECT DISTINCT * from consultant c,consultant_status cs WHERE c.status_code=cs.code and cs.status_type=:status and c.active_flag=1", nativeQuery = true)
	Page<Consultant> getAllByStatus(@Param(value = "status") String status, Pageable paging);
}
