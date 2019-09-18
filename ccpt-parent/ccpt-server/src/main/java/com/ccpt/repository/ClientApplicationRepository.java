package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.CAByStatus;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.DashboardCA;
import com.ccpt.model.DashboardCAStatistics;
import com.ccpt.model.InterviewSummaryStatistics;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

	@Query("SELECT c.id as id,c.consultant.fullname as consultantName,c.clientPosition.generatedCode as generatedCode  FROM ClientApplication c where c.activeFlag=:activeFlag ")
	List<DashboardCA> getDashboardCA(@Param("activeFlag") Boolean activeFlag);

	@Query("SELECT c FROM ClientApplication c where client_position_id=:id AND status_code in (select code from ClientApplicationStatus where statusType = 'Active') AND active_flag=1")
	List<ClientApplication> getAllActiveCAByCpID(@Param(value = "id") Integer id);

	@Query("SELECT count(*) FROM ClientApplication c where client_position_id=:cpId AND consultant_id=:cid AND active_flag=1")
	Integer checkPositionWithConsultant(@Param(value = "cpId") Integer cpId, @Param(value = "cid") Integer cid);

	List<ClientApplication> findByClientPositionIdAndActiveFlag(@Param("clientPositionId") Integer clientPositionId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT  client.name as clientName,client.phone as clientPhone,consultant.fullname as consultantName,consultant.phone as consultantPhone,"
			+ "client_application.interview_mode as interviewMode,client_application.interview_date as interviewDate,client_application.interview_location as interviewLocation,"
			+ "client_application.interview_time  as interviewTime FROM client_application,client_position,client,consultant WHERE "
			+ "client_application.client_position_id=client_position.id AND client_position.client_id =client.id AND client_application.consultant_id=consultant.id"
			+ " AND client_application.interview_date >=curDate() ORDER BY client_application.interview_date ", nativeQuery = true)
	List<InterviewSummaryStatistics> getAllInterviewsFromToday();

	List<ClientApplication> findByConsultantIdAndActiveFlag(@Param("consultantId") Integer consultantId,
			@Param("activeFlag") Boolean activeFlag);

	@Query("SELECT c.id as id,c.consultant.fullname as consultantName,c.clientPosition.generatedCode as generatedCode  FROM ClientApplication c where c.activeFlag=:activeFlag AND c.status.code='Job Confirmed' ORDER BY c.createdDate")
	List<DashboardCA> getJobConfirmedCAs(@Param("activeFlag") Boolean activeFlag);

	@Query(nativeQuery = true, value = "SELECT ca.* FROM client_application ca LEFT OUTER JOIN consultant c ON ca.consultant_id = c.id "
			+ "LEFT OUTER JOIN client_position cp on cp.id = ca.client_position_id WHERE "
			+ "(:clientId IS NULL OR cp.client_id = :clientId)" + " AND (:clientPosId IS NULL OR cp.id=:clientPosId)"
			+ " AND ca.status_code in (SELECT cas.code from client_application_status cas where cas.status_type = :statusType) "
			+ "AND (:searchKey is null OR c.fullname LIKE %:searchKey% OR c.email LIKE %:searchKey% OR c.phone LIKE %:searchKey% )")
	List<ClientApplication> search(@Param("clientId") Integer clientId, @Param("clientPosId") Integer clientPosId,
			@Param("statusType") String statusType, @Param("searchKey") String searchKey);

	@Query("SELECT c.id as id,c.consultant.fullname as consultantName,c.clientPosition.client.name as clientName,c.status.code as status  FROM ClientApplication c, ClientApplicationStatus cas WHERE c.status=cas.code AND cas.statusType='Active'")
	List<DashboardCAStatistics> getDashboardCaStatus();

	@Query(value = "SELECT code FROM client_application_status", nativeQuery = true)
	List<String> getAllDistinctStatusCode();

	@Query(value = "SELECT distinct ca.client_position_id FROM client_application ca,client_position cp,client_position_status cps where ca.client_position_id=cp.id AND cp.status_code=cps.code AND cps.status_type='Active' order by cp.generated_code", nativeQuery = true)
	List<Integer> getAllDistinctClientPositionId();

	@Query(value = "SELECT ca.status_code as statusCode ,(SELECT generated_code  from client_position WHERE id=:clientPositionId ) "
			+ "as clientName,count(client_position_id) as count FROM"
			+ " client_application ca,client_position cp,client_position_status cps  WHERE ca.status_code=:statuscode AND ca.client_position_id=:clientPositionId "
			+ "AND ca.client_position_id=cp.id AND cp.status_code=cps.code AND "
			+ "cps.status_type='Active'", nativeQuery = true)
	List<CAByStatus> getclientPositioncountByStatusCode(@Param("statuscode") String statuscode,
			@Param("clientPositionId") Integer clientPositionId);

	@Modifying(clearAutomatically = true)
	@Query(value = "UPDATE Client_Application  set STATUS_CODE =:status where id =:id", nativeQuery = true)
	void updateStatus(@Param("id") Integer id, @Param("status") String status);

	@Query(value = "SELECT DISTINCT client_application.* from client_application,client_application_status WHERE client_application.status_code=client_application_status.code and (client_application_status.status_type=:status or :status is null ) and client_application.active_flag=1", nativeQuery = true)
	Page<ClientApplication> getAllByStatus(@Param("status") String status, Pageable paging);
}
