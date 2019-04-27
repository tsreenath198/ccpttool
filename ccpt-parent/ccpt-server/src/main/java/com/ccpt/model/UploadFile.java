package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
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
	
	@Lob
	@Column(name = "file")
	private byte[] file;
	
	@Column(name = "ref_id")
	private int refId;
	
	@Column(name = "ref_type")
	private String refType;
	
	@Column(name = "comments")
	private String comments;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public byte[] getFile() {
		return file;
	}

	public void setFile(byte[] file) {
		this.file = file;
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

	@Override
	public String toString() {
		return "UploadFile [id=" + id + ", file=" + file + ", refId=" + refId + ", refType=" + refType + ", comments="
				+ comments + "]";
	}

	public UploadFile( byte[] file, int refId, String refType, String comments) {
		super();
		
		this.file = file;
		this.refId = refId;
		this.refType = refType;
		this.comments = comments;
	}

	public UploadFile() {
		super();
	}

}