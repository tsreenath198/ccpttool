package com.ccpt.model;

import javax.persistence.Cacheable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
@Cacheable(true)

public class IndustryType extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	private String name;
	

}
