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
public class SmsTemplate extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(name = "type", unique = true)
	@NotNull
	private String type;
}
