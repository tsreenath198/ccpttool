package com.ccpt.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OpenClientPosition {

	private Integer clientId;
	private String clientName;
	private String generatedCode;
	private String recruiterName;
	private Date createdDate;

}