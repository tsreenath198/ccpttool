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

	public List<UploadFile> getByRefIdAndTefType(String refType, Integer refId) {
		return uploadFileRepository.getByRefIdAndTefType(refType, refId);
	}

	@Override
	public BaseRepository<UploadFile, Integer> getRepository() {
		return uploadFileRepository;
	}

}
