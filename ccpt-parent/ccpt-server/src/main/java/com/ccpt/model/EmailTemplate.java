package com.ccpt.model;

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
public class EmailTemplate extends IDEntity {

	@Column(name = "type", unique = true)
	@NotNull
	private String type;

	@Column(name = "subject")
	@NotNull
	private String subject;
}
