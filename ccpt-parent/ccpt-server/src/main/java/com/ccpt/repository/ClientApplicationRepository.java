package com.ccpt.repository;

import java.util.Date;
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

	@Query("SELECT  cl.name as clientName,cl.phone as clientPhone,con.fullname as consultantName,con.phone as consultantPhone,ca.interviewMode as interviewMode,ca.interviewDate as interviewDate,ca.interviewLocation as interviewLocation,ca.interviewTime  as interviewTime FROM ClientApplication ca,ClientPosition cp ,Client cl,Consultant con WHERE ca.clientPosition=cp.id AND cp.client =cl.id AND ca.consultant=con.id AND ca.interviewDate BETWEEN :currentDate AND :week")
	List<InterviewSummaryStatistics> getAllInterviewsToday(@Param(value = "currentDate") Date currentDate,
			@Param(value = "week") Date week);

	List<ClientApplication> findByConsultantIdAndActiveFlag(@Param("consultantId") Integer consultantId,
			@Param("activeFlag") Boolean activeFlag);
}
