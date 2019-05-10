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
@Table(name = "client_application")
public class ClientApplication {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "client_application_status_code")
	private String clientApplicationStatusCode;
	
	@Column(name = "client_position_id")
	private int clientPositionId;
	
	@Column(name = "consultant_id")
	private int consultantId;
	
	@Column(name = "notes")
	private String notes;
	
	@Column(name = "interview_date")
	private Date interviewDate;
	
	@Column(name = "active_flag")
	private char activeFlag;
	
	@Column(name = "created_date")
	private Date createdDate;
	
	@Column(name = "updated_date")
	private Date updatedDate;
	
	@Transient
	private String consultantName;
	
	@Transient
	private String clientApplicationStatus;
	
	@Transient
	private String clientPositionCode;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getClientApplicationStatusCode() {
		return clientApplicationStatusCode;
	}

	public void setClientApplicationStatusCode(String clientApplicationStatusCode) {
		this.clientApplicationStatusCode = clientApplicationStatusCode;
	}

	public int getClientPositionId() {
		return clientPositionId;
	}

	public void setClientPositionId(int clientPositionId) {
		this.clientPositionId = clientPositionId;
	}

	public int getConsultantId() {
		return consultantId;
	}

	public void setConsultantId(int consultantId) {
		this.consultantId = consultantId;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Date getInterviewDate() {
		return interviewDate;
	}

	public void setInterviewDate(Date interviewDate) {
		this.interviewDate = interviewDate;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
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

	@Override
	public String toString() {
		return "ClientApplication [id=" + id + ", clientApplicationStatusCode=" + clientApplicationStatusCode
				+ ", clientPositionId=" + clientPositionId + ", consultantId=" + consultantId + ", notes=" + notes
				+ ", interviewDate=" + interviewDate + ", activeFlag=" + activeFlag + ", createdDate=" + createdDate
				+ ", updatedDate=" + updatedDate + "]";
	}

	public String getConsultantName() {
		return consultantName;
	}

	public void setConsultantName(String consultantName) {
		this.consultantName = consultantName;
	}

	public String getClientApplicationStatus() {
		return clientApplicationStatus;
	}

	public void setClientApplicationStatus(String clientApplicationStatus) {
		this.clientApplicationStatus = clientApplicationStatus;
	}

	public String getClientPositionCode() {
		return clientPositionCode;
	}

	public void setClientPositionCode(String clientPositionCode) {
		this.clientPositionCode = clientPositionCode;
	}

}
