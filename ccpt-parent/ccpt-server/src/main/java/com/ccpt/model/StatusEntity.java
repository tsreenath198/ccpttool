package com.ccpt.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
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
public class StatusEntity extends BaseEntity<Integer> {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	@Size(max = 30)
	protected String code;

	@Column
	@Size(max = 30)
	protected String statusType;

	public String getCode() {
		return StringUtils.isEmpty(code) ? null : code;
	}

	public Integer getId() {
		return (id == null || id == 0) ? null : id;
	}

	@Override
	public Integer getKey() {
		return getId();
	}
}
