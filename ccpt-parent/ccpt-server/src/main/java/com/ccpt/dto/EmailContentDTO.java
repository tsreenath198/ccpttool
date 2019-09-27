package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class EmailContentDTO extends IDEntityDTO {
	private String toEmails;
	private String subject;
	private String body;
	private String target;
	private String uuid;
}
