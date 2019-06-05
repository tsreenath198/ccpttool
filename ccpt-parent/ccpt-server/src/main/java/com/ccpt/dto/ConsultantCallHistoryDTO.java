package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ConsultantCallHistoryDTO extends IDEntityDTO {
	private Integer consultantId;
	private Date calledDate;
}
