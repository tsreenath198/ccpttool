package com.ccpt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Login;

public interface LoginRepository extends CrudRepository<Login, String> {
	@Query("select token from Login l where l.username = :username and l.password=:password")
	String getTokenByUsernameAndPassword(@Param(value = "username") String username,
			@Param(value = "password") String password);

}
