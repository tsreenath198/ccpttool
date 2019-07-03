package com.ccpt.model;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ApplicationBody {

	private String fullname;
	private String role;
	private String experienceYrs;
	private String experienceMonths;
	private String currentCTC;
	private String expectedCTC;
	private String cpLocation;
	private String conLocation;
	private String noticePeriod;
	private String description;

}
