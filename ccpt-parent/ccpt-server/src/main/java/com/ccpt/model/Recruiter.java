package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class Recruiter extends FileSupportEntity {

	private static final long serialVersionUID = 1L;

	@Column(unique = true)
	@NotNull
	private String fullname;

	@Column
	@NotNull
	private String gender;

	@Column
	@Temporal(TemporalType.DATE)
	private Date dob;

	@Column
	@NotNull
	private String role;

	@Column
	@NotNull
	private String phone;

	@Column
	@NotNull
	private String email;

	@Column
	@NotNull
	private String address;

	@Column(unique = true)
	@NotNull
	private String aliasName;

	@NotNull
	private String leadEmail;

}
