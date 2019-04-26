package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "client_positions_status")
public class ClientPositionStatus {
	@Id
	@Column(name = "code")
	private String code;
	@Column(name = "description")
	private String description;
	@Column(name = "active_flag")
	private char activeFlag;

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	@Override
	public String toString() {
		return "ClientPositionsStatus [code=" + code + ", description=" + description + ", activeFlag=" + activeFlag
				+ "]";
	}

}
