package com.ccpt.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
public class Consultant extends IDEntity {

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
	private int passoutYear;

	@Column
	private String qualification;

	@Column
	private Double expectedCTC;

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "status_code", updatable = false, insertable = false)
	@NotNull
	private ConsultantStatus status;

	@Column
	private Integer experienceYrs;

	@Column
	private Integer experienceMonths;

	@Column
	private String currentCompany;

	@Column
	private Double currentCTC;

	@Column
	private String prefferedLocation;

	@Column
	private String currentJobTitle;

	@Column
	private String currentFunctionalArea;

	@Column
	private String currentIndustry;

	@Column
	private Integer yearsInCurrentJob;

	@Column
	private Integer monthsInCurrentJob;

	@Column
	private Integer noticePeriod;

	@Column
	private String highestEducation;

}
