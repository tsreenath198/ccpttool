package com.ccpt.service;

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
		/* return loginRepository.findById(login.getUsername()).get(); */

		return loginRepository.getTokenByUsernameAndPassword(username, password);
	}

}
