package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
public class EmailContent extends IDEntity {

	@Column
	@NotNull
	private String toEmails;

	@Column
	@NotNull
	private String subject;

	@Column
	@NotNull
	private String body;
}
