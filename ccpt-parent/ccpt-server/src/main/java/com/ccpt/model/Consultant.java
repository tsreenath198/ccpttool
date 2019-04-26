package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "consultant")
public class Consultant {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	@Column(name = "name")
	private String name;
	@Column(name = "email")
	private String email;
	@Column(name = "phone")
	private String phone;
	@Column(name = "skills")
	private String skills;
	@Column(name = "passout_year")
	private int passoutYear;
	@Column(name = "qualification")
	private String qualification;
	/*
	 * @Column(name = "resume") private MultipartFile resume;
	 */
	@Column(name = "expected_salary")
	private double expectedSalary;
	@Column(name = "description")
	private String description;
	@Column(name = "created_date")
	private Date createdDate;
	@Column(name = "updated_date")
	private Date updatedDate;
	@Column(name = "consultant_status_code")
	private String consultantStatusCode;
	@Column(name = "experience")
	private String experience;
	@Column(name = "activeFlag")
	private char activeFlag;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
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

	/*
	 * public MultipartFile getResume() { return resume; }
	 * 
	 * public void setResume(MultipartFile resume) { this.resume = resume; }
	 */
	public double getExpectedSalary() {
		return expectedSalary;
	}

	public void setExpectedSalary(double expectedSalary) {
		this.expectedSalary = expectedSalary;
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

	public String getExperience() {
		return experience;
	}

	public void setExperience(String experience) {
		this.experience = experience;
	}

	public char getActiveFlag() {
		return activeFlag;
	}

	public void setActiveFlag(char activeFlag) {
		this.activeFlag = activeFlag;
	}

	@Override
	public String toString() {
		return "Consultant [id=" + id + ", name=" + name + ", email=" + email + ", phone=" + phone + ", skills="
				+ skills + ", passoutYear=" + passoutYear + ", qualification=" + qualification + ",expectedSalary="
				+ expectedSalary + ", description=" + description + ", createdDate=" + createdDate + ", updatedDate="
				+ updatedDate + ", consultantStatusCode=" + consultantStatusCode + ", experience=" + experience
				+ ", activeFlag=" + activeFlag + "]";
	}

}
