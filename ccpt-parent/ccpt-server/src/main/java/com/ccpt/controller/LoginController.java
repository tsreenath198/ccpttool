package com.ccpt.controller;

import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.util.UriComponentsBuilder;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.Login;
import com.ccpt.service.ILoginService;
import com.fasterxml.uuid.Generators;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class LoginController {

	@Autowired
	private ILoginService loginService;

	@PostMapping("create")
	public ResponseEntity<Void> register(@RequestBody Login login, HttpServletRequest request,UriComponentsBuilder ucBuilder) {
		UUID uuid = Generators.timeBasedGenerator().generate();
		String token = uuid.toString();
		login.setToken(token);
		login.setCreatedDate(new Date());
		login.setUpdatedDate(new Date());
		login.setActiveFlag('Y');
		loginService.register(login);
		 HttpHeaders headers = new HttpHeaders();
	        headers.setLocation(ucBuilder.path("/user/{id}").buildAndExpand(login.getUsername()).toUri());
	        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
//		return new ResponseEntity<String>("user created successfully",HttpStatus.CREATED);
	}

	@GetMapping(CCPTConstants.GET_ALL)
	public ResponseEntity<List<Login>> getAllUsers() {
		List<Login> activeUsers = loginService.getAllActiveUsers();
		return new ResponseEntity<List<Login>>(activeUsers, HttpStatus.OK);
	}
	
	@PutMapping(CCPTConstants.UPDATE)
	public ResponseEntity<Login> updateConsultant(@RequestBody Login login) {
		login.setUpdatedDate(new Date());
		loginService.updateUser(login);
		return new ResponseEntity<Login>(login, HttpStatus.OK);
	}

	/*
	 * @GetMapping("login") public ResponseEntity<Void>
	 * getTokenByUsernameAndPassword(@RequestBody Login login,
	 * HttpServletRequest request, HttpServletResponse response) { String token
	 * = loginService.getTokenByUsernameAndPassword(login.getUsername(),
	 * login.getPassword()); if (token != null) { HttpSession session =
	 * request.getSession(); session.setAttribute("X-TOKEN", token);
	 * response.setHeader("X-TOKEN", token); return new
	 * ResponseEntity<Void>(HttpStatus.OK); } else { return new
	 * ResponseEntity<Void>(HttpStatus.UNAUTHORIZED); } }
	 */

	@PostMapping("login")
	public ResponseEntity<Login> login(@RequestBody Login login, HttpSession session) throws AuthenticationException {
		String username = login.getUsername();
		String password = login.getPassword();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		Login log = loginService.login(username, password);
		if (log != null) {
			return new ResponseEntity<Login>(log,HttpStatus.OK);
		}
		throw new AuthenticationException("Invalid username or password");
	}

}
