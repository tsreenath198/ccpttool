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

	public UploadFile(byte[] content, Integer refId, String refType, String comments) {
		this.content = content;
		this.refId = refId;
		this.refType = refType;
		this.setDescription(comments);
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

}