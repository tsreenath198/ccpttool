package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class QuestionDTO extends FileSupportEntityDTO {
	private Integer creatorId;
	private String skills;
	private Integer caId;
	private String question;
}
