package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.CAByStatus;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.InterviewSummaryStatistics;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

	List<ClientApplication> findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc(Boolean activeFlag);

	@Query("SELECT c FROM ClientApplication c where client_position_id=:id AND status_code in (select code from ClientApplicationStatus where statusType = 'Active') AND active_flag=1")
	List<ClientApplication> getAllActiveCAByCpID(@Param(value = "id") Integer id);

	@Query("SELECT count(*) FROM ClientApplication c where client_position_id=:cpId AND consultant_id=:cid AND active_flag=1")
	Integer checkPositionWithConsultant(@Param(value = "cpId") Integer cpId, @Param(value = "cid") Integer cid);

	List<ClientApplication> findByClientPositionIdAndActiveFlag(@Param("clientPositionId") Integer clientPositionId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT  client.name as clientName,client.phone as clientPhone,consultant.fullname as consultantName,consultant.phone as consultantPhone,client_application.interview_mode as interviewMode,client_application.interview_date as interviewDate,client_application.interview_location as interviewLocation,client_application.interview_time  as interviewTime FROM client_application,client_position,client,consultant WHERE client_application.client_position_id=client_position.id AND client_position.client_id =client.id AND client_application.consultant_id=consultant.id AND client_application.interview_date >=curDate() ORDER BY client_application.interview_date ", nativeQuery = true)
	List<InterviewSummaryStatistics> getAllInterviewsFromToday();

	List<ClientApplication> findByConsultantIdAndActiveFlag(@Param("consultantId") Integer consultantId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT * FROM Client_Application WHERE active_flag=1 AND status_code='Job Confirmed' ORDER BY created_date ASC", nativeQuery = true)
	List<ClientApplication> getJobConfirmedCAs();

	@Query("SELECT c FROM ClientApplication c WHERE c.clientPosition.client.id=:clientId ")
	List<ClientApplication> search(@Param("clientId") Integer clientId);

	@Query(value = "SELECT code FROM client_application_status", nativeQuery = true)
	List<String> getAllDistinctStatusCode();

	@Query(value = "SELECT distinct client_position_id FROM client_application", nativeQuery = true)
	List<Integer> getAllDistinctClientPositionId();

	@Query(value = "SELECT ca.status_code as statusCode ,(SELECT generated_code  from client_position WHERE id=:clientPositionId ) "
			+ "as clientName,count(client_position_id) as count FROM"
			+ " client_application ca,client_position cp,client_position_status cps  WHERE ca.status_code=:statuscode AND ca.client_position_id=:clientPositionId "
			+ "AND ca.client_position_id=cp.id AND cp.status_code=cps.code AND "
			+ "cps.status_type='Active'", nativeQuery = true)
	List<CAByStatus> getclientPositioncountByStatusCode(@Param("statuscode") String statuscode,
			@Param("clientPositionId") Integer clientPositionId);

}
