package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table
public class EmailContent extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	@NotNull
	private String toEmails;

	@Column
	@NotNull
	private String subject;

	@Column
	@NotNull
	private String body;

	@Column
	@NotNull
	private String target;
}
