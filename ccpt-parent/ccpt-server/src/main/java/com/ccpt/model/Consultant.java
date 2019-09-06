package com.ccpt.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
@Table(uniqueConstraints = { @UniqueConstraint(columnNames = { "fullname", "email", "phone" }) })
public class Consultant extends FileSupportEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(unique = true)
	@NotNull
	private String fullname;

	@Column
	@NotNull
	private String gender;

	@Temporal(TemporalType.DATE)
	@Column
	private Date dob;

	@Column
	private String email;

	@Column
	private String phone;

	@Column
	private String skills;

	@Column
	private String currentLocation;

	@Column
	private Integer passoutYear;

	@Column
	private String expectedCTC;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "status_code", referencedColumnName = "code")
	@NotNull
	private ConsultantStatus status;

	@Column
	private String experienceYrs;

	@Column
	private String experienceMonths;

	@Column
	private String currentCompany;

	@Column
	private String currentCTC;

	@Column
	private String prefferedLocation;

	@Column
	private String currentJobTitle;

	@Column
	private String currentFunctionalArea;

	@Column
	private String currentIndustry;

	@Column
	private String yearsInCurrentJob;

	@Column
	private String monthsInCurrentJob;

	@Column
	private String noticePeriod;

	@Column
	private String highestEducation;
	
	@Column
	private String sourcedFrom;

}
