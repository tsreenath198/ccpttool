package com.ccpt.repository;

import java.util.List;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends BaseRepository<UploadFile, Integer> {
	List<UploadFile> findByRefIdAndRefType(Integer refId, String refType);
	
	long countByRefIdAndRefTypeAndfileName(Integer refId, String refType, String fileName);
}
