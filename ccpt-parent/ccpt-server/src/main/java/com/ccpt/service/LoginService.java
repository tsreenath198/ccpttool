package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Login;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.LoginRepository;

@Service
public class LoginService extends BaseService<Login, Integer> {
	public LoginService() {
		super("Login");
	}

	@Autowired
	private LoginRepository loginRepository;

	public Login login(String username, String password) {
		return loginRepository.login(username, password);
	}

	@Override
	public BaseRepository<Login, Integer> getRepository() {
		return loginRepository;
	}

	public Integer checkUser(String username) {
		return loginRepository.countByUsername(username);
	}

}
