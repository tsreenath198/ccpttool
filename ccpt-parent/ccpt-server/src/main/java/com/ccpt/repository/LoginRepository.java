package com.ccpt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Login;

public interface LoginRepository extends BaseRepository<Login, Integer> {

	@Query("select l from Login l where l.username = :username and l.password=:password")
	Login login(@Param(value = "username") String username, @Param(value = "password") String password);
}
