package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public abstract class BaseEntityDTO<ID> {
	protected String description;
}
