/*package com.ccpt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.Closure;
import com.ccpt.service.IClosureService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.CLOSURE)
public class ClosureController {

	@Autowired
	private IClosureService closureService;

	@GetMapping("getAllClosures")
	public ResponseEntity<List<Closure>> getAllClosures() {
		List<Closure> closureList = closureService.getAllClosures();
		return new ResponseEntity<List<Closure>>(closureList, HttpStatus.OK);
	}
}*/