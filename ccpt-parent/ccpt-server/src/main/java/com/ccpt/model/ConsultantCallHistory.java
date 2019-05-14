package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "consultant_call_history")
public class ConsultantCallHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "consultant_id")
	private int consultantId;
	@Column(name = "description")
	private String description;
	@Column(name = "created_date")
	private Date createdDate;
	@Column(name = "updated_date")
	private Date updatedDate;
	@Column(name = "called_date")
	private Date calledDate;

	@Transient
	private String consultantName;
	@Column(name = "client_position_code")
	private String clientPositionCode;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getConsultantId() {
		return consultantId;
	}

	public void setConsultantId(int consultantId) {
		this.consultantId = consultantId;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Date getUpdatedDate() {
		return updatedDate;
	}

	public void setUpdatedDate(Date updatedDate) {
		this.updatedDate = updatedDate;
	}

	public String getConsultantName() {
		return consultantName;
	}

	public void setConsultantName(String consultantName) {
		this.consultantName = consultantName;
	}

	public Date getCalledDate() {
		return calledDate;
	}

	public void setCalledDate(Date calledDate) {
		this.calledDate = calledDate;
	}

	public String getClientPositionCode() {
		return clientPositionCode;
	}

	public void setClientPositionCode(String clientPositionCode) {
		this.clientPositionCode = clientPositionCode;
	}

	@Override
	public String toString() {
		return "ConsultantCallHistory [id=" + id + ", consultantId=" + consultantId + ", description=" + description
				+ ", createdDate=" + createdDate + ", updatedDate=" + updatedDate + ", calledDate=" + calledDate
				+ ", consultantName=" + consultantName + ", clientPositionCode=" + clientPositionCode + "]";
	}

}
