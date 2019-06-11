package com.ccpt.dto;

import java.util.List;

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
	protected List<AdditionalPropertyDTO> properties;
}
