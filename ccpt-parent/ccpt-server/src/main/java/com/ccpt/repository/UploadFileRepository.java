package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends CrudRepository<UploadFile, Integer> {
	@Query("SELECT u FROM UploadFile u WHERE refType=:refType AND refId=:refId")
	List<UploadFile> getByRefIdAndTefType(@Param(value = "refType") String refType,
			@Param(value = "refId") Integer refId);

}
