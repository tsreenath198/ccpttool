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
@Table(name = "client_call_history")
public class ClientCallHistory {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "client_position_id")
	private int clientPositionId;
	@Column(name = "notes")
	private String notes;
	@Column(name = "created_date")
	private Date createdDate;
	@Column(name = "updated_date")
	private Date updatedDate;
	@Transient
	private String clientName;
	
	@Transient
	private String clientPositionCode;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getClientPositionId() {
		return clientPositionId;
	}

	public void setClientPositionId(int clientPositionId) {
		this.clientPositionId = clientPositionId;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
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

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	@Override
	public String toString() {
		return "ClientCallHistory [id=" + id + ", clientPositionId=" + clientPositionId + ", notes=" + notes
				+ ", createdDate=" + createdDate + ", updatedDate=" + updatedDate + ", clientName=" + clientName + "]";
	}

	public String getClientPositionCode() {
		return clientPositionCode;
	}

	public void setClientPositionCode(String clientPositionCode) {
		this.clientPositionCode = clientPositionCode;
	}

}
