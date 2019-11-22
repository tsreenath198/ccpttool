package com.ccpt.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class ClientPosition extends FileSupportEntity {
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

	@Column()
	@NotNull
	private String generatedCode;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "client_id")
	@NotNull
	private Client client;

	@Column
	private String location;

	@Column
	private String qualification;

	@Column
	private String availability;

	@Column
	private String jobType;

	@Column
	private String shineURL;

	@Column
	private String naukriURL;

	@Temporal(TemporalType.DATE)
	@Column
	private Date shinePosting;

	@Temporal(TemporalType.DATE)
	@Column
	private Date naukriPosting;

	@Temporal(TemporalType.DATE)
	@Column
	private Date facebookPosting;

	@Temporal(TemporalType.DATE)
	@Column
	private Date twitterPosting;

	@Temporal(TemporalType.DATE)
	@Column
	private Date shineMassMailing;

	@Temporal(TemporalType.DATE)
	@Column
	private Date naukriMassMailing;

	@Column
	private Integer shineMassMailingCount;

	@Column
	private Integer naukriMassMailingCount;
}
