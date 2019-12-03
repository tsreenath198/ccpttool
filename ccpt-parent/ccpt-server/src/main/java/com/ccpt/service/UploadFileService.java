package com.ccpt.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.UploadFile;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.UploadFileRepository;

@Service
public class UploadFileService extends BaseService<UploadFile, Integer> {
	@Autowired
	private UploadFileRepository uploadFileRepository;

	public UploadFileService() {
		super("Upload File");
	}

	public UploadFile getByRefIdAndRefType(Integer refId, String refType) {
		return uploadFileRepository.getByRefIdAndRefType(refId, refType);
	}

	@Override
	public BaseRepository<UploadFile, Integer> getRepository() {
		return uploadFileRepository;
	}

	public boolean isDuplicate(Integer refId, String refType, String fileName) {
		return uploadFileRepository.countByRefIdAndRefTypeAndFileName(refId, refType, fileName) > 0;
	}

	@Override
	public void delete(Integer id) {
		uploadFileRepository.deleteById(id);
	}
}
