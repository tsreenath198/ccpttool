package com.ccpt.model;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Lob;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class UploadFile extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public UploadFile() {

	}

	public UploadFile(byte[] content, Integer refId, String refType, String comments, String fileName,
			String fileType) {
		this.content = content;
		this.refId = refId;
		this.refType = refType;
		this.setDescription(comments);
		this.fileName = fileName;
		this.fileType = fileType;
	}

	@Column
	@NotNull
	private Integer refId;
	@Column
	@NotNull
	private String refType;
	@Lob
	@Basic
	@Column(name = "content")
	@NotNull
	private byte[] content;
	@Column
	private String fileName;
	@Column
	private String fileType;
}