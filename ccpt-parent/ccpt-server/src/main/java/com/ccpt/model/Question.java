package com.ccpt.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class Question extends FileSupportEntity {

	private static final long serialVersionUID = 1L;

	@Column
	private String question;

	@Column
	private String skills;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "creator_id")
	private Recruiter creator;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "ca_id")
	private ClientApplication ca;

}
