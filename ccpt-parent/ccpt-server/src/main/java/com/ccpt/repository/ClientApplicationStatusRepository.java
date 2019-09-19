package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.ClientApplicationStatus;
import com.ccpt.model.DropDownStatistics;

public interface ClientApplicationStatusRepository extends BaseRepository<ClientApplicationStatus, Integer> {

	ClientApplicationStatus findByCodeAndActiveFlagOrderByCreatedDateDesc(@Param("code") String code,
			@Param("activeFlag") Boolean activeFlag);

	@Query("SELECT id as id,description as name FROM ClientApplicationStatus WHERE activeFlag=1 ORDER BY createdDate desc")
	List<DropDownStatistics> getAllCAStatus();
}
