package com.ccpt.controller;

import java.util.Date;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.model.Login;
import com.ccpt.service.ILoginService;
import com.fasterxml.uuid.Generators;

@Controller
@RequestMapping("/")
public class LoginController {

	@Autowired
	private ILoginService loginService;

	// @PostMapping("register")login
	@PostMapping("login")
	public ResponseEntity<Void> register(@RequestBody Login login, HttpServletRequest request) {
		UUID uuid = Generators.timeBasedGenerator().generate();
		String token = uuid.toString();
		login.setToken(token);
		login.setCreatedDate(new Date());
		loginService.register(login);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@PostMapping("getToken")
	public ResponseEntity<String> getTokenByUsernameAndPassword(@RequestBody Login login, HttpServletRequest request,
			HttpServletResponse response) {
		String token = loginService.getTokenByUsernameAndPassword(login);
		HttpSession session = request.getSession();
		session.setAttribute("X-TOKEN", token);
		response.setHeader("X-TOKEN", token);
		return new ResponseEntity<String>(token, HttpStatus.OK);
	}

}
