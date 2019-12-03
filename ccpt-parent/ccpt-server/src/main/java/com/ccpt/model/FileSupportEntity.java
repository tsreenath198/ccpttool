package com.ccpt.model;

import java.util.List;

public class FileSupportEntity extends IDEntity {
	private static final long serialVersionUID = -2943684219967205393L;
	private transient List<UploadFile> files;

	public List<UploadFile> getFiles() {
		return files;
	}

	public void setFiles(List<UploadFile> files) {
		this.files = files;
	}
}
