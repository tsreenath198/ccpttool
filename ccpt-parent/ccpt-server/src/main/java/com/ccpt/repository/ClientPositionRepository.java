package com.ccpt.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.DropDownStatistics;

public interface ClientPositionRepository extends BaseRepository<ClientPosition, Integer> {

	List<ClientPosition> findTop5ByActiveFlagAllIgnoreCaseOrderByIdDesc(Boolean activeFlag);

	@Query("SELECT t1 FROM ClientPosition t1 WHERE t1.id NOT IN (SELECT distinct t2.clientPosition.id FROM ClientApplication t2) AND t1.status='Open' AND t1.activeFlag=1 Order By createdDate Desc")
	List<ClientPosition> getAllOpenCP();

	void deleteByClientId(Integer clientId);

	List<ClientPosition> findByClientIdAndActiveFlagOrderByCreatedDateDesc(@Param("clientId") Integer clientId,
			@Param("activeFlag") Boolean activeFlag);

	@Query("SELECT id as id,generatedCode as name FROM ClientPosition WHERE active_flag=1  ORDER BY createdDate DESC")
	List<DropDownStatistics> getAllCps();

	@Query(value = "SELECT * FROM Client_Position t1 WHERE t1.id NOT IN (SELECT distinct t2.client_position_id FROM Client_Application t2 WHERE t2.created_date >= DATE(NOW()) - INTERVAL 7 DAY) AND t1.status_code='Open' AND (t1.created_date <= DATE(NOW()) - INTERVAL 7 DAY) AND t1.active_flag=1  ORDER BY t1.created_date DESC", nativeQuery = true)
	List<ClientPosition> getLastWeekDyingCP(@Param(value = "days") Integer days);

	@Query(value = "SELECT DISTINCT cp.* from client_position cp,client_position_status cps WHERE cp.status_code=cps.code and (cps.status_type=:status or :status is null ) and cp.active_flag=1  ORDER BY cp.created_date DESC", nativeQuery = true)
	Page<ClientPosition> getAllByStatus(@Param(value = "status") String status, Pageable paging);
}
