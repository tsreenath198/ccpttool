package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;

import com.ccpt.model.Client;
import com.ccpt.model.DropDownStatistics;

public interface ClientRepository extends BaseRepository<Client, Integer> {
	@Query("SELECT id as id,name as name FROM Client WHERE active_flag=1 ORDER BY createdDate DESC")
	List<DropDownStatistics> getAllClients();
}
