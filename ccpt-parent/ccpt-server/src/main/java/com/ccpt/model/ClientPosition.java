package com.ccpt.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class ClientPosition extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column
	@NotNull
	private String role;

	@Column
	private String experience;

	@Column
	@NotNull
	private String requiredSkills;

	@Column
	@NotNull
	private String requiredPositions;

	@Column
	private String minCtc;

	@Column
	private String maxCtc;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "status_code", referencedColumnName = "code")
	@NotNull
	private ClientPositionStatus status;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "closed_by", nullable = true)
	private Recruiter closedBy;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "assigned_to")
	private Recruiter assignedTo;

	@Column(unique = true)
	@NotNull
	private String generatedCode;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "client_id")
	@NotNull
	private Client client;

	@Column
	private String jobCode;

	@Column
	private String location;

}
