package com.ccpt.service;

import java.util.List;

import com.ccpt.model.Login;

public interface ILoginService {
	void register(Login login);

	public String getTokenByUsernameAndPassword(String username, String password);

	public Login login(String username, String password);
	List<Login> getAllActiveUsers();

	void updateUser(Login login);


	Login getUsersById(String string);
}
