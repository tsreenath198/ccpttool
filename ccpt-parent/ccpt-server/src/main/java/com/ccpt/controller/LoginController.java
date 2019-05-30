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
import com.ccpt.service.ILoginService;

@Controller
@CrossOrigin
@RequestMapping("/")
public class LoginController {

	@Autowired
	private ILoginService loginService;

	/*@PostMapping("login")
	public ResponseEntity<Void> register(@RequestBody Login login, HttpServletRequest request) {
		UUID uuid = Generators.timeBasedGenerator().generate();
		String token = uuid.toString();
		login.setToken(token);
		login.setCreatedDate(new Date());
		login.setUpdatedDate(new Date());
		login.setActiveFlag('Y');
		loginService.register(login);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@GetMapping("login")
	public ResponseEntity<Void> getTokenByUsernameAndPassword(@RequestBody Login login, HttpServletRequest request,
			HttpServletResponse response) {
		String token = loginService.getTokenByUsernameAndPassword(login.getUsername(), login.getPassword());
		if (token != null) {
			HttpSession session = request.getSession();
			session.setAttribute("X-TOKEN", token);
			response.setHeader("X-TOKEN", token);
			return new ResponseEntity<Void>(HttpStatus.OK);
		} else {
			return new ResponseEntity<Void>(HttpStatus.UNAUTHORIZED);
		}
	}*/ 	

	@PostMapping("login")
	public ResponseEntity<Void> login(@RequestBody Login login, HttpSession session) throws AuthenticationException {
		String username = login.getUsername();
		String password = login.getPassword();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		Login log = loginService.login(username, password);
		if (log != null) {
			return new ResponseEntity<Void>(HttpStatus.OK);
		}
		throw new AuthenticationException("Invalid username or password");
	}

}
