package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientPositionStatusDTO extends IDEntityDTO  {
	private String code;
	private String statusType;
}
