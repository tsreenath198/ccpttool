package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ConsultantDTO extends IDEntityDTO {

	private String fullname;
	private String gender;
	private Date dob;
	private String email;
	private String phone;
	private String skills;
	private String currentLocation;
	private int passoutYear;
	private String qualification;
	private Double expectedCTC;
	private String cStatus;
	private Integer experienceYrs;
	private Integer experienceMonths;
	private String currentCompany;
	private Double currentCTC;
	private String prefferedLocation;
	private String currentJobTitle;
	private String currentFunctionalArea;
	private String currentIndustry;
	private Integer yearsInCurrentJob;
	private Integer monthsInCurrentJob;
	private Integer noticePeriod;
	private String highestEducation;
}
