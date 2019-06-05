package com.ccpt.model;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
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
	@Column
	@NotNull
	private String role;

	@Column
	private String experience;

	@Column
	@NotNull
	private String requiredSkills;

	@Column
	private Double minCtc;

	@Column
	private Double maxCtc;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "status_code", referencedColumnName = "code")
	@NotNull
	private ClientPositionStatus status;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "closed_by")
	private Recruiter closedBy;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "assigned_to")
	private Recruiter assignedTo;

	@Column(unique = true)
	@NotNull
	private String generatedCode;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_id")
	@NotNull
	private Client client;

	@Column
	private String jobCode;

	@Column
	private String location;

}
