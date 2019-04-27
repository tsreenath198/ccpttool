package com.ccpt.service;

import com.ccpt.model.UploadFile;

public interface IUploadFileService {

	public UploadFile getUploadFileById(Integer id);

	public void uploadFile(UploadFile uploadFile);

	public void deleteFile(Integer id);

}
