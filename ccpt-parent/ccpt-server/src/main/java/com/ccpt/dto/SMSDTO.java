package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SMSDTO extends IDEntityDTO {
	private String contactNumbers;
	private String message;
	private String target;
}
