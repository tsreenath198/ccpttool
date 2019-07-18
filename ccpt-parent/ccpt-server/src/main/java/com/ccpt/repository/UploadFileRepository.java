package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends BaseRepository<UploadFile, Integer> {
	List<UploadFile> findByRefIdAndRefType(Integer refId, String refType);

	long countByRefIdAndRefTypeAndFileName(Integer refId, String refType, String fileName);

	@Query("SELECT u FROM UploadFile u WHERE refId=:refId AND refType=:refType")
	UploadFile getByRefIdAndRefType(@Param(value = "refId") Integer refId, @Param(value = "refType") String refType);
}
