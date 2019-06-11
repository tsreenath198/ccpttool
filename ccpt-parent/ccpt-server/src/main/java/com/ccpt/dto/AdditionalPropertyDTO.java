package com.ccpt.dto;

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
