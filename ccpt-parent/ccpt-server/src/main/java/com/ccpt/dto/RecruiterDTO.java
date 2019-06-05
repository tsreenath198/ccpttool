package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class RecruiterDTO extends IDEntityDTO {
	private String fullname;
	private String gender;
	private Date dob;
	private String role;
	private String phone;
	private String email;
	private String address;
}
