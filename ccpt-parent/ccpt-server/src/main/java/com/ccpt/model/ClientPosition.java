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
@Table(name = "client_position")
public class ClientPosition {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "technology")
	private String technology;

	@Column(name = "experience")
	private String experience;

	@Column(name = "required_skills")
	private String requiredSkills;

	@Column(name = "min_ctc")
	private double minCtc;

	@Column(name = "max_ctc")
	private double maxCtc;

	@Column(name = "client_positions_status_code")
	private String clientPositionsStatusCode;

	@Column(name = "closed_by")
	private String closedBy;

	@Column(name = "additional_comments")
	private String additionalComments;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "updated_date")
	private Date updatedDate;

	@Column(name = "active_flag")
	private char activeFlag;

	@Column(name = "client_position_code")
	private String clientPositionCode;

	@Column(name = "client_id")
	private Integer clientId;

	@Column(name = "job_code")
	private String jobCode;

	@Column(name = "location")
	private String location;

	@Column(name = "no_of_positions")
	private Integer numberOfPositions;

	@Transient
	private String clientName;

	@Transient
	private String clientPositionsStatus;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTechnology() {
		return technology;
	}

	public void setTechnology(String technology) {
		this.technology = technology;
	}

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public String getRequiredSkills() {
		return requiredSkills;
	}

	public void setRequiredSkills(String requiredSkills) {
		this.requiredSkills = requiredSkills;
	}

	public double getMinCtc() {
		return minCtc;
	}

	public void setMinCtc(double minCtc) {
		this.minCtc = minCtc;
	}

	public double getMaxCtc() {
		return maxCtc;
	}

	public void setMaxCtc(double maxCtc) {
		this.maxCtc = maxCtc;
	}

	public String getClientPositionsStatusCode() {
		return clientPositionsStatusCode;
	}

	public void setClientPositionsStatusCode(String clientPositionsStatusCode) {
		this.clientPositionsStatusCode = clientPositionsStatusCode;
	}

	public String getClosedBy() {
		return closedBy;
	}

	public void setClosedBy(String closedBy) {
		this.closedBy = closedBy;
	}

	public String getAdditionalComments() {
		return additionalComments;
	}

	public void setAdditionalComments(String additionalComments) {
		this.additionalComments = additionalComments;
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

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	public String getClientPositionsStatus() {
		return clientPositionsStatus;
	}

	public void setClientPositionsStatus(String clientPositionsStatus) {
		this.clientPositionsStatus = clientPositionsStatus;
	}

	public String getClientPositionCode() {
		return clientPositionCode;
	}

	public void setClientPositionCode(String clientPositionCode) {
		this.clientPositionCode = clientPositionCode;
	}

	public Integer getClientId() {
		return clientId;
	}

	public void setClientId(Integer clientId) {
		this.clientId = clientId;
	}

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getJobCode() {
		return jobCode;
	}

	public void setJobCode(String jobCode) {
		this.jobCode = jobCode;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public Integer getNumberOfPositions() {
		return numberOfPositions;
	}

	public void setNumberOfPositions(Integer numberOfPositions) {
		this.numberOfPositions = numberOfPositions;
	}

	@Override
	public String toString() {
		return "ClientPosition [id=" + id + ", technology=" + technology + ", experience=" + experience
				+ ", requiredSkills=" + requiredSkills + ", minCtc=" + minCtc + ", maxCtc=" + maxCtc
				+ ", clientPositionsStatusCode=" + clientPositionsStatusCode + ", closedBy=" + closedBy
				+ ", additionalComments=" + additionalComments + ", createdDate=" + createdDate + ", updatedDate="
				+ updatedDate + ", activeFlag=" + activeFlag + ", clientPositionCode=" + clientPositionCode
				+ ", clientId=" + clientId + ", jobCode=" + jobCode + ", location=" + location + ", numberOfPositions="
				+ numberOfPositions + ", clientName=" + clientName + ", clientPositionsStatus=" + clientPositionsStatus
				+ "]";
	}

}
