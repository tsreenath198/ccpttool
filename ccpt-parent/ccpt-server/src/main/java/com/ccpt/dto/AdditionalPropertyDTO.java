package com.ccpt.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AdditionalPropertyDTO extends IDEntityDTO {

	private String name;
	private String value;
}
