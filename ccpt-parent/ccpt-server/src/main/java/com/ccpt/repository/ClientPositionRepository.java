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

	@Query("SELECT cp.id as id,cp.generatedCode as name FROM ClientPosition cp,ClientPositionStatus cps WHERE cp.activeFlag=1 AND cp.status=cps.code AND cps.statusType='active' ORDER BY cp.createdDate DESC")
	List<DropDownStatistics> getAllCps();

	@Query(value = "SELECT * FROM Client_Position t1 WHERE t1.id NOT IN (SELECT distinct t2.client_position_id FROM Client_Application t2 WHERE t2.created_date >= DATE(NOW()) - INTERVAL 7 DAY) AND t1.status_code='Open' AND (t1.created_date <= DATE(NOW()) - INTERVAL 7 DAY) AND t1.active_flag=1  ORDER BY t1.created_date DESC", nativeQuery = true)
	List<ClientPosition> getLastWeekDyingCP(@Param(value = "days") Integer days);

	@Query(value = "SELECT DISTINCT client_position.* from client_position,client_position_status WHERE client_position.status_code=client_position_status.code and (client_position_status.status_type=:status or :status is null ) and client_position.active_flag=1 ORDER BY client_position.created_date DESC", nativeQuery = true)
	Page<ClientPosition> getAllByStatus(@Param(value = "status") String status, Pageable paging);

	@Query(value = "SELECT * FROM client_position  	where created_date >= DATE_SUB(CURDATE(), INTERVAL 30 DAY) AND (alma_connecturl IS NULL or shineurl IS NULL or "
			+ "naukriurl IS NULL or shine_posting IS NULL or naukri_posting IS NULL or alma_connect_posting IS NULL or facebook_posting IS NULL or twitter_posting IS NULL or "
			+ "shine_mass_mailing IS NULL or naukri_mass_mailing IS NULL) Order By updated_date Desc", nativeQuery = true)
	List<ClientPosition> getEmptyData();
}
