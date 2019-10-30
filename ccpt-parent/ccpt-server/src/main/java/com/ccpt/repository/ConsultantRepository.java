package com.ccpt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Consultant;
import com.ccpt.model.ConsultantStatistics;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	List<Consultant> findByPhoneOrFullnameOrEmail(String phone, String fullname, String email);

	@Query(value = "SELECT id as id,fullname as name,email as email,phone as phone FROM consultant WHERE active_flag=1 AND status_code != 'Inactive' ORDER BY created_date DESC LIMIT 100", nativeQuery = true)
	List<ConsultantStatistics> getAllConsultants();

	@Query(value = "SELECT * FROM consultant WHERE (fullname LIKE %:searchKey% OR  phone LIKE %:searchKey% OR email LIKE %:searchKey% OR skills LIKE %:searchKey%) "
			+ "and active_flag=1 ORDER BY created_date DESC", nativeQuery = true)
	List<Consultant> search(@Param(value = "searchKey") String searchKey);

	@Query("SELECT DISTINCT c FROM  Consultant c,ConsultantStatus cs WHERE (c.phone IS NULL OR c.phone ='' OR c.email IS NULL OR c.email ='' OR c.skills IS NULL OR c.skills ='' OR c.highestEducation IS NULL OR c.highestEducation ='' AND c.status = cs.code AND cs.statusType='Active') AND c.activeFlag=1 ORDER BY c.createdDate DESC ")
	List<Consultant> getInactiveConsultants();

	@Query(value = "SELECT DISTINCT consultant.* from consultant,consultant_status WHERE consultant.status_code=consultant_status.code and (consultant_status.status_type=:status or :status is null or :status = '' ) and consultant.active_flag=1 ORDER BY consultant.created_date DESC ", nativeQuery = true)
	Page<Consultant> getAllByStatus(@Param(value = "status") String status, Pageable paging);

}
