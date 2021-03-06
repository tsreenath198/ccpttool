package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Table
@Entity
@Getter
@Setter
@ToString
public class OtherContact extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(unique = true)
	@NotNull
	private String name;
	@Column
	private String phone;
	@Column
	private String email;
}