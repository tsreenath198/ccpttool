package com.ccpt.controller;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.model.Login;
import com.ccpt.service.BaseService;
import com.ccpt.service.LoginService;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class LoginController extends BaseController<Login, Integer> {

	@Autowired
	private LoginService loginService;

	@PostMapping("login")
	public ResponseEntity<Login> login(@RequestBody Login login, HttpSession session) throws AuthenticationException {
		String username = login.getUsername();
		String password = login.getPassword();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		Login log = loginService.login(username, password);
		if (log != null) {
			return new ResponseEntity<Login>(log, HttpStatus.OK);
		}
		throw new AuthenticationException("Invalid username or password");
	}

	@Override
	public BaseService<Login, Integer> getService() {
		return loginService;
	}

}
