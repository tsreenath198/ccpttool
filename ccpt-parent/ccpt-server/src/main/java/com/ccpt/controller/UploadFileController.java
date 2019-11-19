package com.ccpt.controller;

import java.io.IOException;

import javax.servlet.ServletOutputStream;
import javax.servlet.http.HttpServletResponse;
import javax.validation.ValidationException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.orm.jpa.JpaSystemException;
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

	@GetMapping(CCPTConstants.DOWNLOAD)
	public void downloadFile(@PathVariable Integer id, HttpServletResponse httpServletResponse) throws IOException {
		UploadFile dbFile = uploadFileService.get(id);

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
		} catch (Exception exception) {
			System.out.println("exceptions");
		}
	}

	@PostMapping("save")
	public ResponseEntity<GenericResponse> uploadFile(@RequestParam("file") MultipartFile file,
			@RequestParam("refId") int refId, @RequestParam("refType") String refType,
			@RequestParam("comments") String comments) throws Exception {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		String fileType = file.getContentType();

		boolean isDuplicate = uploadFileService.isDuplicate(refId, refType, fileName);
		if (!isDuplicate) {
			UploadFile uploadFile = new UploadFile(file.getBytes(), refId, refType, comments, fileName, fileType);
			uploadFileService.save(uploadFile);

			return new ResponseEntity<GenericResponse>(new GenericResponse(fileName + "  uploaded successfully"),
					HttpStatus.OK);
		} else {
			throw new ValidationException("File with file name : " + fileName + " already exists !");
		}
	}

	@PostMapping("saveCrf")
	public ResponseEntity<GenericResponse> uploadFile(@RequestParam("file") MultipartFile file,
			@RequestParam("caId") int caId, @RequestParam("comments") String comments) throws Exception {

		String fileName = StringUtils.cleanPath(file.getOriginalFilename());
		String fileType = file.getContentType();
		if (fileName.endsWith("doc") || fileName.endsWith("docx")) {
			if (!fileName.contains("_Crf")) {
				throw new ValidationException("file name does not contain _Crf extension");
			}
		} else {
			throw new ValidationException("please upload only documents");
		}
		boolean isDuplicate = uploadFileService.isDuplicate(caId, "CRF", fileName);
		if (!isDuplicate) {
			UploadFile uploadFile = new UploadFile(file.getBytes(), caId, "CRF", comments, fileName, fileType);
			try {
				uploadFileService.save(uploadFile);
			} catch (JpaSystemException e) {
				throw new ValidationException("file size exceeds maximum limit");
			}
			return new ResponseEntity<GenericResponse>(new GenericResponse(fileName + "  uploaded successfully"),
					HttpStatus.OK);
		} else {
			throw new ValidationException("File with file name : " + fileName + " already exists !");
		}
	}

	@GetMapping("getCRFResume")
	public ResponseEntity<UploadFile> getFile(@RequestParam("caId") int caId) {
		UploadFile result = uploadFileService.getByRefIdAndRefType(caId, "CRF");
		return new ResponseEntity<UploadFile>(result, HttpStatus.OK);

	}

	@DeleteMapping(CCPTConstants.ID_PARAM)
	public ResponseEntity<Void> deleteFile(@PathVariable Integer id) {
		uploadFileService.delete(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

}