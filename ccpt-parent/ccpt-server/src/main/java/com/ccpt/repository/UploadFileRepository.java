package com.ccpt.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends BaseRepository<UploadFile, Integer> {
	@Query("SELECT u FROM UploadFile u WHERE refType=:refType AND refId=:refId")
	UploadFile downloadFileByRefIdAndRefType(@Param(value = "refType") String refType,
			@Param(value = "refId") Integer refId);

}
