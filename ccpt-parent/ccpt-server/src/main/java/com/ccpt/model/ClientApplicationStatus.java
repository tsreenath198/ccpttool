package com.ccpt.model;

import javax.persistence.Cacheable;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Cacheable(true)
@Getter
@Setter
@ToString
public class ClientApplicationStatus extends StatusEntity {
	/**
	* 
	*/
	private static final long serialVersionUID = 1L;

}
