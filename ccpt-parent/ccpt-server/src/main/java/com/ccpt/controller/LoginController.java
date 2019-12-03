package com.ccpt.controller;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.HttpSession;
import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.LoginDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.LoginMapper;
import com.ccpt.model.Login;
import com.ccpt.service.BaseService;
import com.ccpt.service.LoginService;

@Controller
@CrossOrigin
@RequestMapping("/user")
public class LoginController extends BaseController<LoginDTO, Login, Integer> {
	@Autowired
	private LoginService loginService;

	@PostMapping(CCPTConstants.LOGIN)
	public ResponseEntity<Login> login(@RequestBody Login login, HttpSession session) throws AuthenticationException {
		String username = login.getUsername();
		String password = login.getPassword();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		Integer count = loginService.checkUser(username);
		if (count == 1) {
			Login log = loginService.login(username, password);
			if (log != null)
				return new ResponseEntity<Login>(log, HttpStatus.OK);
			throw new AuthenticationException("Invalid  password");
		} else
			throw new AuthenticationException("Invalid  username");
	}

	@Override
	public BaseService<Login, Integer> getService() {
		return loginService;
	}

	@Override
	public BaseMapper<LoginDTO, Login, Integer> getMapper() {
		return Mappers.getMapper(LoginMapper.class);
	}

	@Override
	protected void validateAndClean(Login model) {
		if (model.getUsername() == null)
			throw new ValidationException("username cannot be null");
		if (model.getPassword() == null)
			throw new ValidationException("password cannot be null");
	}
}
