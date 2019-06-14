package com.ccpt.model;

import javax.persistence.Entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@ToString
public class PositionSummary extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Integer cpId;
	private String generatedCode;
	private Integer count;

	public PositionSummary(Integer cpId, String generatedCode, Integer count) {
		this.cpId = cpId;
		this.generatedCode = generatedCode;
		this.count = count;
	}

}