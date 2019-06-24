package com.ccpt.controller;

import java.io.IOException;
import java.util.Arrays;
import java.util.stream.Collectors;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.GenericResponse;
import com.ccpt.model.UploadFile;
import com.ccpt.service.UploadFileService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.UPLOAD_FILE)
public class UploadFileController {

	@Autowired
	private UploadFileService uploadFileService;

	@GetMapping(CCPTConstants.ID_PARAM)
	public ResponseEntity<UploadFile> getUploadFileById(@RequestParam Integer id) {
		UploadFile uploadFile = uploadFileService.get(id);
		return new ResponseEntity<UploadFile>(uploadFile, HttpStatus.OK);
	}

	@GetMapping(CCPTConstants.DOWNLOAD_BY_REF_ID_AND_REF_TPYE)
	public GenericResponse downloadFileByRefIdAndRefType(@RequestParam String refType, @RequestParam Integer refId,
			HttpServletResponse httpServletResponse) throws IOException {
		UploadFile dbFile = uploadFileService.downloadFileByRefIdAndRefType(refType, refId);

		byte[] retrievedFile = dbFile.getContent();
		try {
			httpServletResponse.setContentType(dbFile.getFileType());
			httpServletResponse.setHeader("Expires", "0");
			httpServletResponse.setHeader("Cache-Control", "must-revalidate, post-check=0, pre-check=0");
			httpServletResponse.setHeader("Pragma", "public");
			httpServletResponse.addHeader("Content-Type", dbFile.getFileType());
			httpServletResponse.setContentType(dbFile.getFileType());
			httpServletResponse.setHeader("Content-Disposition", "attachment; filename=" + dbFile.getFileName());
			ServletOutputStream servletOutputStream = httpServletResponse.getOutputStream();
			servletOutputStream.write(retrievedFile);
			servletOutputStream.flush();
			servletOutputStream.close();
			return new GenericResponse(dbFile.getFileName() + "  downloaded successfully");
		} catch (Exception exception) {
			System.out.println("exceptions");
		}
		return null;
	}

	@PostMapping("save")
	public ResponseEntity<GenericResponse> uploadFile(@RequestParam("file") MultipartFile file,
			@RequestParam("refId") int refId, @RequestParam("refType") String refType,
			@RequestParam("comments") String comments) throws IOException {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		String fileType = file.getContentType();
		UploadFile uploadFile = new UploadFile(file.getBytes(), refId, refType, comments, fileName, fileType);
		uploadFileService.save(uploadFile);

		return new ResponseEntity<GenericResponse>(new GenericResponse(fileName + "  uploaded successfully"),
				HttpStatus.OK);
	}

	@PostMapping("/uploadMultipleFiles")
	public ResponseEntity<Void> uploadMultipleFiles(@RequestParam("files") MultipartFile[] files,
			@RequestParam("refId") int refId, @RequestParam("refType") String refType,
			@RequestParam("comments") String comments) {
		Arrays.asList(files).stream().map(file -> {
			try {
				return uploadFile(file, refId, refType, comments);
			} catch (IOException e) {
				e.printStackTrace();
				return new ResponseEntity<Void>(HttpStatus.CREATED);
			}
		}).collect(Collectors.toList());
		return null;

	}

	@DeleteMapping(CCPTConstants.ID_PARAM)
	public ResponseEntity<Void> deleteFile(@PathVariable Integer id) {
		uploadFileService.delete(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}