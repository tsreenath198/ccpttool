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
import javax.validation.constraints.NotNull;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table
@Getter
@Setter
@ToString
public class ClientApplication extends IDEntity {

	@OneToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "status_code", referencedColumnName = "code")
	@NotNull
	private ClientApplicationStatus status;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_position_id")
	@NotNull
	private ClientPosition clientPosition;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "consultant_id")
	@NotNull
	private Consultant consultant;

	@Temporal(TemporalType.DATE)
	@Column
	private Date interviewDate;

	@Column
	private String interviewTime;

	@Column
	private String interviewLocation;

}
