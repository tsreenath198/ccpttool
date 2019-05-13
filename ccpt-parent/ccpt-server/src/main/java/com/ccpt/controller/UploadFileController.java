package com.ccpt.controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.model.UploadFile;
import com.ccpt.service.IUploadFileService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.UPLOAD_FILE)
public class UploadFileController {

	@Autowired
	private IUploadFileService uploadFileService;

	@GetMapping(CCPTConstants.GET_BY_ID)
	public ResponseEntity<UploadFile> getUploadFileById(@RequestParam Integer id) {
		UploadFile uploadFile = uploadFileService.getUploadFileById(id);
		return new ResponseEntity<UploadFile>(uploadFile, HttpStatus.OK);
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("refId") int refId,
			@RequestParam("refType") String refType, @RequestParam("comments") String comments) throws IOException {
		UploadFile uploadFile = new UploadFile(file.getBytes(), refId, refType, comments);
		uploadFileService.uploadFile(uploadFile);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@DeleteMapping(CCPTConstants.DELETE_BY_ID+"/{id}")
	public ResponseEntity<Void> deleteFile(@PathVariable Integer id) {
		uploadFileService.deleteFile(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}
}