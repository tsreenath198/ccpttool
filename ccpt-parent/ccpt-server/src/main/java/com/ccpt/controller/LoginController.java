package com.ccpt.controller;

import javax.security.sasl.AuthenticationException;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
	public ResponseEntity<Login> login(@RequestBody Login login, HttpSession session,
			HttpServletResponse httpServletResponse) throws AuthenticationException {
		String username = login.getUsername();
		String password = login.getPassword();
		session.setAttribute("username", username);
		session.setAttribute("password", password);
		Integer count = loginService.checkUser(username);
		if (count == 1) {
			Login log = loginService.login(username, password);
			if (log != null) {
				if (login.isCheck()) {
					Cookie user = new Cookie("ccpt_key", log.getUsername());
					Cookie pwd = new Cookie("ccpt_pwd", log.getPassword());
					httpServletResponse.addCookie(user);
					httpServletResponse.addCookie(pwd);
					log.setCheck(true);
					Cookie check = new Cookie("check", "true");
					httpServletResponse.addCookie(check);
				} else {
					disableCookies(httpServletResponse);
				}
				return new ResponseEntity<Login>(log, HttpStatus.OK);
			}
			disableCookies(httpServletResponse);
			throw new AuthenticationException("Invalid  password");

		} else {
			disableCookies(httpServletResponse);
			throw new AuthenticationException("Invalid  username");
		}
	}

	private void disableCookies(HttpServletResponse httpServletResponse) {
		Cookie ccpt_key = new Cookie("ccpt_key", "");
		ccpt_key.setMaxAge(0);
		httpServletResponse.addCookie(ccpt_key);
		Cookie ccpt_pwd = new Cookie("ccpt_pwd", "");
		ccpt_pwd.setMaxAge(0);
		httpServletResponse.addCookie(ccpt_pwd);
	}

	@PostMapping("/secretLogin")
	public ResponseEntity<Login> secretLogin(HttpServletRequest httpServletRequest) throws AuthenticationException {
		String username = null, password = null;
		boolean check = false;
		Cookie[] cookies = httpServletRequest.getCookies();
		if (cookies != null) {
			for (Cookie cookie : cookies) {
				if (cookie.getName().equals("ccpt_key")) {
					username = cookie.getValue();
				}
				if (cookie.getName().equals("ccpt_pwd")) {
					password = cookie.getValue();
				}
				if (cookie.getName().equals("check")) {
					check = true;
				}
			}
			Login log = loginService.login(username, password);
			if (log != null && check == true)
				log.setCheck(check);
			return new ResponseEntity<Login>(log, HttpStatus.OK);
		}
		return null;

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
		if (model.getUsername() == null) {
			throw new ValidationException("username cannot be null");
		}
		if (model.getPassword() == null) {
			throw new ValidationException("password cannot be null");
		}
	}

}
