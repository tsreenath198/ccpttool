package com.ccpt.model;

import java.util.Arrays;

import javax.persistence.Basic;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Lob;
import javax.persistence.Table;

@Entity
@Table(name = "upload_file")
public class UploadFile {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "ref_id")
	private int refId;

	@Column(name = "ref_type")
	private String refType;

	@Column(name = "comments")
	private String comments;

	@Lob
	@Basic(fetch = FetchType.LAZY)
	@Column(name = "content", nullable = false)
	private byte[] content;

	public UploadFile(byte[] content, int refId, String refType, String comments) {
		super();
		this.refId = refId;
		this.refType = refType;
		this.comments = comments;
		this.content = content;
	}

	public UploadFile() {
		super();
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getRefId() {
		return refId;
	}

	public void setRefId(int refId) {
		this.refId = refId;
	}

	public String getRefType() {
		return refType;
	}

	public void setRefType(String refType) {
		this.refType = refType;
	}

	public String getComments() {
		return comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

	public byte[] getContent() {
		return content;
	}

	public void setContent(byte[] content) {
		this.content = content;
	}

	@Override
	public String toString() {
		return "UploadFile [id=" + id + ", refId=" + refId + ", refType=" + refType + ", comments=" + comments
				+ ", content=" + Arrays.toString(content) + "]";
	}

}