package com.ccpt.model;

import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Transient;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class Login extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	@Column(unique = true)
	@NotNull
	private String username;
	@Column
	private String password;
	@Column
	private String token = UUID.randomUUID().toString();
	@Column
	private String role;
	@Transient
	private boolean check;
}
