package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplication;
import com.ccpt.model.InterviewSummaryStatistics;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

	@Query("SELECT c FROM ClientApplication c where client_position_id=:id AND status_code!=:status AND active_flag=1")
	List<ClientApplication> getAllActiveCAByCpID(@Param(value = "id") Integer id,
			@Param(value = "status") String status);

	@Query("SELECT count(*) FROM ClientApplication c where client_position_id=:cpId AND consultant_id=:cid AND active_flag=1")
	Integer checkPositionWithConsultant(@Param(value = "cpId") Integer cpId, @Param(value = "cid") Integer cid);

	List<ClientApplication> findByClientPositionIdAndActiveFlag(@Param("clientPositionId") Integer clientPositionId,
			@Param("activeFlag") Boolean activeFlag);

	@Query(value = "SELECT  client.name as clientName,client.phone as clientPhone,consultant.fullname as consultantName,consultant.phone as consultantPhone,client_application.interview_mode as interviewMode,client_application.interview_date as interviewDate,client_application.interview_location as interviewLocation,client_application.interview_time  as interviewTime FROM client_application,client_position,client,consultant WHERE client_application.client_position_id=client_position.id AND client_position.client_id =client.id AND client_application.consultant_id=consultant.id AND client_application.interview_date >=curDate() ORDER BY client_application.interview_date ", nativeQuery = true)
	List<InterviewSummaryStatistics> getAllInterviewsFromToday();

	List<ClientApplication> findByConsultantIdAndActiveFlag(@Param("consultantId") Integer consultantId,
			@Param("activeFlag") Boolean activeFlag);

}
