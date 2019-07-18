package com.ccpt.repository;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends BaseRepository<UploadFile, Integer> {
	UploadFile findByRefIdAndRefType(Integer refId, String refType);

	long countByRefIdAndRefTypeAndFileName(Integer refId, String refType, String fileName);
}
