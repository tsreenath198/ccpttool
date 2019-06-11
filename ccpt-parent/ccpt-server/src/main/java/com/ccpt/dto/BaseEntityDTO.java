package com.ccpt.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public abstract class BaseEntityDTO<ID> {
	protected String description;
	
	
}
