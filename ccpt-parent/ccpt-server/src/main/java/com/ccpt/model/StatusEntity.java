package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.Id;
import javax.persistence.MappedSuperclass;
import javax.validation.constraints.Size;

import org.springframework.util.StringUtils;

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
	@Size(max = 30)
	protected String code;

	public String getCode() {
		return StringUtils.isEmpty(code) ? null : code;
	}

	@Override
	public String getKey() {
		return getCode();
	}
}
