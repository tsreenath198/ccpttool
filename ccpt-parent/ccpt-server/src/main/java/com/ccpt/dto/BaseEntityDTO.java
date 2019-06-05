package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public abstract class BaseEntityDTO<ID> {
	protected Boolean activeFlag = true;
	protected String description;
}
