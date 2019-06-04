package com.ccpt.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.MappedSuperclass;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
@MappedSuperclass
public abstract class BaseEntity<ID> {

	@Column
	protected Boolean activeFlag = true;

	@Column
	@Temporal(TemporalType.TIMESTAMP)
	@CreationTimestamp
	protected Date createdDate;

	@Column
	@Temporal(TemporalType.TIMESTAMP)
	@UpdateTimestamp
	protected Date updatedDate;

	@Column
	protected String description;

	@EmbeddedId
	public abstract ID getKey();
}
