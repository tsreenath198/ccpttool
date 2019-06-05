package com.ccpt.dto;

import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class StatusEntityDTO extends BaseEntityDTO<String> {
	@Size(max = 30)
	@NotNull
	protected String code;
}
