package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@MappedSuperclass
public class StatusEntity extends BaseEntity<String> {
	@Id
	@Column
	protected String code;

	@Override
	public String getKey() {
		return code;
	}
}
