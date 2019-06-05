package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmailTemplateDTO extends IDEntityDTO {
	private String type;
	private String subject;
}
