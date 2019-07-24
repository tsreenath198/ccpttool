package com.ccpt.exception;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Date;

import javax.persistence.EntityExistsException;
import javax.persistence.EntityNotFoundException;
import javax.security.sasl.AuthenticationException;
import javax.validation.ConstraintViolationException;
import javax.validation.ValidationException;

import org.springframework.beans.ConversionNotSupportedException;
import org.springframework.beans.TypeMismatchException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.http.converter.HttpMessageNotReadableException;
import org.springframework.http.converter.HttpMessageNotWritableException;
import org.springframework.orm.jpa.JpaSystemException;
import org.springframework.validation.BindException;
import org.springframework.web.HttpMediaTypeNotAcceptableException;
import org.springframework.web.HttpMediaTypeNotSupportedException;
import org.springframework.web.HttpRequestMethodNotSupportedException;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.MissingPathVariableException;
import org.springframework.web.bind.MissingServletRequestParameterException;
import org.springframework.web.bind.ServletRequestBindingException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.context.request.ServletWebRequest;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.context.request.async.AsyncRequestTimeoutException;
import org.springframework.web.multipart.support.MissingServletRequestPartException;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.ccpt.controller.EmailController;

@ControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {
	//sreenath.t@talentcorner.in
	String toCSV = "anurag.uskcorp@gmail.com,pavan.uskcorp@gmail.com";
	String subject = null;
	String body = null;
	@Autowired
	EmailController emailController;

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<Object> globleExcpetionHandler(DataIntegrityViolationException ex, WebRequest request)
			throws Exception {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	}

	@ExceptionHandler(EntityNotFoundException.class)
	public ResponseEntity<Object> entityNotFoundExcpetionHandler(EntityNotFoundException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(AuthenticationException.class)
	public ResponseEntity<Object> authenticationExceptionHandler(AuthenticationException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.UNAUTHORIZED);
	}

	@ExceptionHandler(JpaSystemException.class)
	public ResponseEntity<Object> globleExcpetionHandler(JpaSystemException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	}

	@ExceptionHandler(ConstraintViolationException.class)
	public ResponseEntity<Object> ConstraintViolationExceptionHandler(ConstraintViolationException ex,
			WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	}

	@Override
	protected ResponseEntity<Object> handleAsyncRequestTimeoutException(AsyncRequestTimeoutException ex,
			HttpHeaders arg1, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotReadable(HttpMessageNotReadableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

	@Override
	protected ResponseEntity<Object> handleBindException(BindException ex, HttpHeaders headers, HttpStatus status,
			WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleConversionNotSupported(ConversionNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotAcceptable(HttpMediaTypeNotAcceptableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMediaTypeNotSupported(HttpMediaTypeNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleHttpMessageNotWritable(HttpMessageNotWritableException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleHttpRequestMethodNotSupported(HttpRequestMethodNotSupportedException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleMissingPathVariable(MissingPathVariableException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestParameter(MissingServletRequestParameterException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleMissingServletRequestPart(MissingServletRequestPartException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleServletRequestBindingException(ServletRequestBindingException ex,
			HttpHeaders headers, HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@Override
	protected ResponseEntity<Object> handleTypeMismatch(TypeMismatchException ex, HttpHeaders headers,
			HttpStatus status, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, status);
	}

	@ExceptionHandler(EntityExistsException.class)
	public ResponseEntity<Object> entityExistsExceptionHandler(EntityExistsException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.CONFLICT);
	}

	@ExceptionHandler(CAException.class)
	public ResponseEntity<Object> cAExceptionHandler(CAException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler(ValidationException.class)
	public ResponseEntity<Object> validationExceptionHandler(ValidationException ex, WebRequest request) {
		ErrorDetails errorDetails = new ErrorDetails(new Date(), ex.getMessage(), request.getDescription(false));
		sendExceptionEmail(ex, request);
		return new ResponseEntity<>(errorDetails, HttpStatus.BAD_REQUEST);
	}

	private void sendExceptionEmail(Exception ex, WebRequest request) {
		subject = ex.getClass().getName() + " at URL "
				+ ((ServletWebRequest) request).getRequest().getRequestURL().toString();
		StringWriter sw = new StringWriter();
		ex.printStackTrace(new PrintWriter(sw));
		body = sw.toString();
		emailController.sendmail(toCSV, subject, body);
	}
}