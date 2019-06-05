package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StatusEntityDTO extends BaseEntityDTO<String> {
	protected String code;
}
