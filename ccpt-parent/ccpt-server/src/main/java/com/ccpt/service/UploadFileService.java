package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.UploadFile;
import com.ccpt.repository.UploadFileRepository;

@Service
public class UploadFileService implements IUploadFileService {
	@Autowired
	private UploadFileRepository uploadFileRepository;

	@Override
	public UploadFile getUploadFileById(Integer id) {
		UploadFile obj = uploadFileRepository.findById(id).get();
		return obj;
	}

	@Override
	public void uploadFile(UploadFile uploadFile) {
		uploadFileRepository.save(uploadFile);
	}

	@Override
	public void deleteFile(Integer id) {
		uploadFileRepository.delete(getUploadFileById(id));
	}

	@Override
	public List<UploadFile> getByRefIdAndTefType(String refType, Integer refId) {
		return uploadFileRepository.getByRefIdAndTefType(refType, refId);
	}

}
