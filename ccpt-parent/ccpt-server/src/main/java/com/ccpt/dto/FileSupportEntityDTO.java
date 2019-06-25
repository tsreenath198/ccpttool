package com.ccpt.dto;

import java.util.List;

import com.ccpt.model.UploadFile;

public class FileSupportEntityDTO extends IDEntityDTO {
	private List<UploadFile> files;

	public List<UploadFile> getFiles() {
		return files;
	}

	public void setFiles(List<UploadFile> files) {
		this.files = files;
	}

}
