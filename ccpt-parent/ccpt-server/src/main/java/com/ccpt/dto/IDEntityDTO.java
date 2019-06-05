package com.ccpt.dto;

import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@MappedSuperclass
public class IDEntityDTO extends BaseEntityDTO<Integer> {
	protected Integer id;
}
