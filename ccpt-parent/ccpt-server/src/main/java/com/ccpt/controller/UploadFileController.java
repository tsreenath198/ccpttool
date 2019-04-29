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

import com.ccpt.model.UploadFile;
import com.ccpt.service.IUploadFileService;

@Controller
@CrossOrigin
@RequestMapping("/uploadFile")
public class UploadFileController {

	@Autowired
	private IUploadFileService uploadFileService;

	@GetMapping("id/{id}")
	public ResponseEntity<UploadFile> getUploadFileById(@PathVariable("id") Integer id) {
		UploadFile uploadFile = uploadFileService.getUploadFileById(id);
		return new ResponseEntity<UploadFile>(uploadFile, HttpStatus.OK);
	}

	@PostMapping("create")
	public ResponseEntity<Void> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("refId") int refId,
			@RequestParam("refType") String refType, @RequestParam("comments") String comments) throws IOException {

		/*UploadFile uploadFile = new UploadFile();
		uploadFile.setComments(comments);
		uploadFile.setFile(file.getBytes());
		uploadFile.setRefId(refId);
		uploadFile.setRefType(refType);*/
		
		UploadFile uploadFile = new UploadFile(file.getBytes(), refId, refType, comments);

		uploadFileService.uploadFile(uploadFile);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
	}

	@DeleteMapping("id/{id}")
	public ResponseEntity<Void> deleteFile(@PathVariable("id") Integer id) {
		uploadFileService.deleteFile(id);
		return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
	}
}
