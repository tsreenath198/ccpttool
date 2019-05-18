/*package com.ccpt.filter;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

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

	private static final List<String> SWAGGER_URLS = Arrays.asList("/v2/api-docs", "/configuration/ui",
			"/swagger-resources", "/configuration/security", "/swagger-ui.html", "/webjars/");

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {

		HttpServletRequest httpServletRequest = (HttpServletRequest) request;
		HttpServletResponse httpServletResponse = (HttpServletResponse) response;
		httpServletResponse.setHeader("Access-Control-Allow-Headers", "X-TOKEN, Content-Type");
		String requestURI = httpServletRequest.getRequestURI();
		if (requestURI.equals("/prelogin")) {
			httpServletResponse.setStatus(HttpServletResponse.SC_OK);
		} else {
			if (!requestURI.contains("/login") && !isSwaggerUrl(requestURI)) {

				String dbToken = (String) httpServletRequest.getSession().getAttribute("X-TOKEN");
				String token = httpServletRequest.getHeader("X-TOKEN");
				System.out.println("token:" + token);

				if (dbToken == null || !dbToken.equalsIgnoreCase(token)) {
					httpServletResponse.setStatus(HttpServletResponse.SC_UNAUTHORIZED);
					httpServletResponse.getWriter().write("LOGIN");
					return;
				}
			}
			chain.doFilter(httpServletRequest, httpServletResponse);
		}

	}

	private boolean isSwaggerUrl(String requestURI) {
		for (String expr : SWAGGER_URLS) {
			if (requestURI.contains(expr)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public void destroy() {

	}

	@Override
	public void init(FilterConfig arg0) throws ServletException {

	}

}
*/