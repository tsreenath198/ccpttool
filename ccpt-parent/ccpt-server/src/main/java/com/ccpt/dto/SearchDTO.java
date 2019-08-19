package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SearchDTO extends IDEntityDTO {
	private String profile;
	private String logicOr;
	private String logicAnd;
	private String refine1;
	private String refine2;
	private String functionalArea;
}
