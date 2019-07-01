package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class Payment extends IDEntity {
	/**
	 * 
	 */

	private static final long serialVersionUID = 1L;

	@Column
	@NotNull
	private Date invoiceDate;

	@Column
	@NotNull
	private String branchHeadName;

	@Column
	@NotNull
	private String branchLocation;

	@Column
	@NotNull
	private String candidateName;

	@Column
	@NotNull
	private String phone;

	@Column
	@NotNull
	private String designation;

	@Column
	@NotNull
	private Date joiningDate;

	@Column
	@NotNull
	private String annualPackage;

	@Column
	@NotNull
	private String companyName;

	@Column
	@NotNull
	private String companyGstNum;

	@Column
	@NotNull
	private String companyWebsite;

	@Column
	@NotNull
	private String billingAddress;

	@Column
	@NotNull
	private String contactPerson;

	@Column
	@NotNull
	private String contactPersonDesignation;

	@Column
	@NotNull
	private String contactPersonNum;

	@Column
	@NotNull
	private String contactPersonEmail;

	@Column
	@NotNull
	private String serviceCharge;

	@Column
	@NotNull
	private String creditPeriod;

	@Column
	@NotNull
	private String gauranteePeriod;

}
