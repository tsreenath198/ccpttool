package com.ccpt.service;

import com.ccpt.model.Login;

public interface ILoginService {
	void register(Login login);

	public String getTokenByUsernameAndPassword(String username, String password);

	public Login login(String username, String password);
}
