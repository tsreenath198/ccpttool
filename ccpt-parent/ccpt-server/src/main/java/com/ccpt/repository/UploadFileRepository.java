package com.ccpt.repository;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.UploadFile;

public interface UploadFileRepository extends CrudRepository<UploadFile, Integer> {

}
