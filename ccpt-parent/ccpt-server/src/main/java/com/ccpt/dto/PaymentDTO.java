package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class PaymentDTO extends IDEntityDTO {
	private Date invoiceDate;
	private String branchHeadName;
	private String branchLocation;
	private String candidateName;
	private String phone;
	private String designation;
	private Date joiningDate;
	private String annualPackage;
	private String companyName;
	private String companyGstNum;
	private String companyWebsite;
	private String billingAddress;
	private String contactPerson;
	private String contactPersonDesignation;
	private String contactPersonNum;
	private String contactPersonEmail;
	private String serviceCharge;
	private String creditPeriod;
	private String gauranteePeriod;
	private Date paidOn;
	private String paidStatus;
	private String generatedCode;
}
