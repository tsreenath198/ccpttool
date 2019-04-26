package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client_application_status")
public class ClientApplicationStatus {
	@Column(name = "description")
	private String description;
	@Id
	@Column(name = "code")
	private String code;
	@Column(name = "active_flag")
	private char activeFlag;

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	@Override
	public String toString() {
		return "ClientApplicationStatus [description=" + description + ", code=" + code + ", activeFlag=" + activeFlag
				+ "]";
	}

}
