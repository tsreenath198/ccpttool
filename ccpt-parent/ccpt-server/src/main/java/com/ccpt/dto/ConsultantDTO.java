package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ConsultantDTO extends FileSupportEntityDTO {
	private String fullname;
	private String gender;
	private Date dob;
	private String email;
	private String phone;
	private String skills;
	private String currentLocation;
	private Integer passoutYear;
	private String expectedCTC;
	private String conStatus;
	private String experienceYrs;
	private String experienceMonths;
	private String currentCompany;
	private String currentCTC;
	private String prefferedLocation;
	private String currentJobTitle;
	private String currentFunctionalArea;
	private String currentIndustry;
	private String yearsInCurrentJob;
	private String monthsInCurrentJob;
	private String noticePeriod;
	private String highestEducation;
	private String sourcedFrom;
	private Integer expYrs;
	private Integer expMonths;
}
