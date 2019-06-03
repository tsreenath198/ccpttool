package com.ccpt.controller;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

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
import com.ccpt.util.MyMultipleFileZip;

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

	@GetMapping(CCPTConstants.GET_BY_REF_ID_AND_REF_TPYE)
	public ResponseEntity<Void> getByRefIdAndRefType(@RequestParam String refType, @RequestParam Integer refId)
			throws IOException {
		byte[] content = null;
		List<UploadFile> res = uploadFileService.getByRefIdAndTefType(refType, refId);
		List<String> files = new ArrayList<String>();
		for (int i = 0; i < res.size(); i++) {
			content = res.get(i).getContent();
			String filePath = writeByte(content, i);
			files.add(filePath);
		}
		MyMultipleFileZip mfe = new MyMultipleFileZip();
		mfe.zipFiles(files);
		return new ResponseEntity<>(HttpStatus.OK);
	}

	static String writeByte(byte[] bytes, int iterNum) {
		String FILEPATH = "d:\\test" + iterNum + ".txt";
		File file = new File(FILEPATH);
		try {
			OutputStream os = new FileOutputStream(file);
			os.write(bytes);
			System.out.println("Successfully" + " byte inserted");
			os.close();
		} catch (Exception e) {
			System.out.println("Exception: " + e);
		}
		return FILEPATH;
	}

	@PostMapping(CCPTConstants.CREATE)
	public ResponseEntity<Void> uploadFile(@RequestParam("file") MultipartFile file, @RequestParam("refId") int refId,
			@RequestParam("refType") String refType, @RequestParam("comments") String comments) throws IOException {
		UploadFile uploadFile = new UploadFile(file.getBytes(), refId, refType, comments);
		uploadFileService.uploadFile(uploadFile);
		return new ResponseEntity<Void>(HttpStatus.CREATED);
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

	@DeleteMapping(CCPTConstants.DELETE_BY_ID + "/{id}")
	public ResponseEntity<Void> deleteFile(@PathVariable Integer id) {
		uploadFileService.deleteFile(id);
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@GetMapping("/getAllfromRefIdAndType")
	public ResponseEntity<List<UploadFile>> getAllfromRefIdAndType(@RequestParam String refType,
			@RequestParam Integer refId) throws IOException {
		List<UploadFile> res = uploadFileService.getByRefIdAndTefType(refType, refId);
		return new ResponseEntity<List<UploadFile>>(res, HttpStatus.OK);
	}
}