package com.ccpt.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.UniqueConstraint;
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(uniqueConstraints = @UniqueConstraint(columnNames = { "client_position_id", "consultant_id" }))
@Getter
@Setter
@ToString
public class ClientApplication extends IDEntity {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "status_code", referencedColumnName = "code")
	@NotNull
	private ClientApplicationStatus status;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "client_position_id")
	@NotNull
	private ClientPosition clientPosition;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "consultant_id")
	@NotNull
	private Consultant consultant;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "creator_id")
	@NotNull
	private Recruiter creator;

	@Temporal(TemporalType.DATE)
	@Column
	private Date interviewDate;

	@Temporal(TemporalType.DATE)
	@Column
	private Date sentOn;

	@Column
	private String interviewTime;

	@Column
	private String interviewLocation;

	@Column
	private String interviewMode;

}
