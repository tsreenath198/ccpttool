package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@Entity
@Table
public class AdditionalProperty extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	private String refType;

	@Column
	private Integer refId;

	@Column
	private String name;

	@Column
	private String value;

}
