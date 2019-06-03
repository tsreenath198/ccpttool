package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Login;
import com.ccpt.repository.LoginRepository;

@Service
public class LoginService implements ILoginService {
	@Autowired
	private LoginRepository loginRepository;

	@Override
	public void register(Login login) {
		loginRepository.save(login);
	}

	@Override
	public String getTokenByUsernameAndPassword(String username, String password) {
		return loginRepository.getTokenByUsernameAndPassword(username, password);
	}

	@Override
	public Login login(String username, String password) {
		Login login = loginRepository.login(username, password);

		if (login != null) {
			return login;
		}
		return null;
	}

	@Override
	public List<Login> getAllActiveUsers() {
		
		return loginRepository.findByActiveFlagAllIgnoreCaseOrderByCreatedDateDesc("Y");
	}

}
