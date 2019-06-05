package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientCallHistoryDTO extends IDEntityDTO {
	private Integer cpId;
	private Date calledDate;
}
