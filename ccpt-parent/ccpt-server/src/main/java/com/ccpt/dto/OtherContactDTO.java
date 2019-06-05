package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class OtherContactDTO extends IDEntityDTO {
	private String name;
	private String phone;
	private String email;
}