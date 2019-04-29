package com.ccpt.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

@Component
public class SecurityFilter implements Filter {

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		HttpServletResponse httpServletResponse = (HttpServletResponse) response;

		String requestURI = httpServletRequest.getRequestURI();
		if (!requestURI.contains("/login")) {

			String dbToken = (String) httpServletRequest.getSession().getAttribute("X-TOKEN");
			String token = httpServletRequest.getHeader("X-TOKEN");
			System.out.println("token:" + token);

			if (!dbToken.equalsIgnoreCase(token)) {

				throw new ServletException(new SecurityException("TOKEN_ERROR"));
			}
		}
		chain.doFilter(httpServletRequest, httpServletResponse);

	}

	@Override
	public void destroy() {

	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}