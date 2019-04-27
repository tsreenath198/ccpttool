package com.ccpt.service;

import com.ccpt.model.Login;

public interface ILoginService {
	void register(Login login);

	public String getTokenByUsernameAndPassword(Login login);
}
