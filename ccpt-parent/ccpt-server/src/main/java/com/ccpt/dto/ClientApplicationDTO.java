package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientApplicationDTO extends IDEntityDTO {
	private String caStatus;
	private Integer cpId;
	private Integer consultantId;
	private Date interviewDate;
	private String interviewTime;
	private String interviewLocation;
	private Integer creatorId;

}
