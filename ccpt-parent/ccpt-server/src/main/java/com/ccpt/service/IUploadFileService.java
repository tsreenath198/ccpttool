package com.ccpt.service;

import java.util.List;

import com.ccpt.model.UploadFile;

public interface IUploadFileService {

	public UploadFile getUploadFileById(Integer id);

	public void uploadFile(UploadFile uploadFile);

	public void deleteFile(Integer id);

	public List<UploadFile> getByRefIdAndTefType(String refType, Integer refId);

}
