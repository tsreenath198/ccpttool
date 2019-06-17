package com.ccpt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Consultant;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	@Query("SELECT count(*) FROM Consultant where fullname=:fullname AND email=:email")
	Integer findByFullnameAndEmail(@Param(value = "fullname") String fullname, @Param(value = "email") String email);
}
