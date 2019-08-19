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
public class Search extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	@NotNull
	private String profile;

	@Column
	@NotNull
	private String logicOr;

	@Column
	@NotNull
	private String logicAnd;

	@Column
	@NotNull
	private String refine1;

	@Column
	@NotNull
	private String refine2;

	@Column
	@NotNull
	private String functionalArea;
}
