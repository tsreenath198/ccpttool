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

	@OneToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "status_code", updatable = false, insertable = false)
	@NotNull
	private ClientPositionStatus status;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "closed_by", updatable = false, insertable = false)
	private Recruiter closedBy;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "assigned_to", updatable = false, insertable = false)
	private Recruiter assignedTo;

	@Column(unique = true)
	@NotNull
	private String generatedCode;

	@ManyToOne(cascade = CascadeType.PERSIST)
	@JoinColumn(name = "client_id", updatable = false, insertable = false)
	@NotNull
	private Client client;

	@Column
	private String jobCode;

	@Column
	private String location;

}
