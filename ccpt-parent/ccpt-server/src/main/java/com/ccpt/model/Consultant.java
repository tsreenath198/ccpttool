package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;
import javax.persistence.UniqueConstraint;

@Entity
@Table(name = "consultant", uniqueConstraints = { @UniqueConstraint(columnNames = { "fullname", "email", "phone" }) })
public class Consultant {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;

	@Column(name = "fullname")
	private String fullname;

	@Column(name = "gender")
	private String gender;

	@Temporal(TemporalType.DATE)
	@Column(name = "dob")
	private Date dob;

	@Column(name = "email")
	private String email;

	@Column(name = "phone")
	private String phone;

	@Column(name = "skills")
	private String skills;

	@Column(name = "current_location")
	private String currentLocation;

	@Column(name = "passout_year")
	private int passoutYear;

	@Column(name = "qualification")
	private String qualification;

	@Column(name = "expected_ctc")
	private double expectedCTC;

	@Column(name = "description")
	private String description;

	@Column(name = "created_date")
	private Date createdDate;

	@Column(name = "updated_date")
	private Date updatedDate;

	@Column(name = "consultant_status_code")
	private String consultantStatusCode;

	@Column(name = "experience_yrs")
	private int experienceYrs;

	@Column(name = "experience_months")
	private int experienceMonths;

	@Column(name = "active_flag")
	private char activeFlag;

	@Transient
	private String consultantStatus;

	@Column(name = "current_company")
	private String currentCompany;
	@Column(name = "current_ctc")
	private double currentCTC;
	@Column(name = "preffered_location")
	private String prefferedLocation;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getGender() {
		return gender;
	}

	public void setGender(String gender) {
		this.gender = gender;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public String getSkills() {
		return skills;
	}

	public void setSkills(String skills) {
		this.skills = skills;
	}

	public String getCurrentLocation() {
		return currentLocation;
	}

	public void setCurrentLocation(String currentLocation) {
		this.currentLocation = currentLocation;
	}

	public int getPassoutYear() {
		return passoutYear;
	}

	public void setPassoutYear(int passoutYear) {
		this.passoutYear = passoutYear;
	}

	public String getQualification() {
		return qualification;
	}

	public void setQualification(String qualification) {
		this.qualification = qualification;
	}

	public double getExpectedCTC() {
		return expectedCTC;
	}

	public void setExpectedCTC(double expectedCTC) {
		this.expectedCTC = expectedCTC;
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

	public String getConsultantStatusCode() {
		return consultantStatusCode;
	}

	public void setConsultantStatusCode(String consultantStatusCode) {
		this.consultantStatusCode = consultantStatusCode;
	}

	public int getExperienceYrs() {
		return experienceYrs;
	}

	public void setExperienceYrs(int experienceYrs) {
		this.experienceYrs = experienceYrs;
	}

	public int getExperienceMonths() {
		return experienceMonths;
	}

	public void setExperienceMonths(int experienceMonths) {
		this.experienceMonths = experienceMonths;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	public String getConsultantStatus() {
		return consultantStatus;
	}

	public void setConsultantStatus(String consultantStatus) {
		this.consultantStatus = consultantStatus;
	}

	public String getCurrentCompany() {
		return currentCompany;
	}

	public void setCurrentCompany(String currentCompany) {
		this.currentCompany = currentCompany;
	}

	public double getCurrentCTC() {
		return currentCTC;
	}

	public void setCurrentCTC(double currentCTC) {
		this.currentCTC = currentCTC;
	}

	public String getPrefferedLocation() {
		return prefferedLocation;
	}

	public void setPrefferedLocation(String prefferedLocation) {
		this.prefferedLocation = prefferedLocation;
	}

	@Override
	public String toString() {
		return "Consultant [id=" + id + ", fullname=" + fullname + ", gender=" + gender + ", dob=" + dob + ", email="
				+ email + ", phone=" + phone + ", skills=" + skills + ", currentLocation=" + currentLocation
				+ ", passoutYear=" + passoutYear + ", qualification=" + qualification + ", expectedCTC=" + expectedCTC
				+ ", description=" + description + ", createdDate=" + createdDate + ", updatedDate=" + updatedDate
				+ ", consultantStatusCode=" + consultantStatusCode + ", experienceYrs=" + experienceYrs
				+ ", experienceMonths=" + experienceMonths + ", activeFlag=" + activeFlag + ", consultantStatus="
				+ consultantStatus + ", currentCompany=" + currentCompany + ", currentCTC=" + currentCTC
				+ ", prefferedLocation=" + prefferedLocation + "]";
	}

}
