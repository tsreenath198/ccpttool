package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.UploadFile;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.UploadFileRepository;

@Service
public class UploadFileService extends BaseService<UploadFile, Integer> {
	public UploadFileService() {
		super("Upload File");
	}

	@Autowired
	private UploadFileRepository uploadFileRepository;

	public List<UploadFile> findByRefIdAndRefType(Integer refId, String refType) {
		return uploadFileRepository.findByRefIdAndRefType(refId, refType);
	}

	@Override
	public BaseRepository<UploadFile, Integer> getRepository() {
		return uploadFileRepository;
	}

}
