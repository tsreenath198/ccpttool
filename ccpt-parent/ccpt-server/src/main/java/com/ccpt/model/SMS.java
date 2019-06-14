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
public class SMS extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	@NotNull
	private String contactNumbers;

	@Column
	@NotNull
	private String message;

}
