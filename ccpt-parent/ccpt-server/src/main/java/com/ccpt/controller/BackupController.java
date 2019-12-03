package com.ccpt.controller;

import java.sql.SQLException;

import javax.xml.bind.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.GenericResponse;
import com.ccpt.service.BackupService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.BACKUP)
public class BackupController {
	@Autowired
	BackupService backupService;

	/* Delete all tables and update from local to hostgator */
	@GetMapping("/backup")
	public ResponseEntity<GenericResponse> backUp() throws SQLException, ValidationException {
		String response = backupService.backUp();
		return new ResponseEntity<GenericResponse>(new GenericResponse(response), HttpStatus.OK);
	}

	/* Update all tables from last updated date from local to hostgator */
	@GetMapping("/backupArchives")
	public ResponseEntity<GenericResponse> backUpArchives() throws SQLException, ValidationException {
		String response = backupService.backUpArchives();
		return new ResponseEntity<GenericResponse>(new GenericResponse(response), HttpStatus.OK);
	}
}
