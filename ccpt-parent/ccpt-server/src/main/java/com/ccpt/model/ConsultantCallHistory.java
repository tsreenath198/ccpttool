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
public class ConsultantCallHistory extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "consultant_id")
	@NotNull
	private Consultant consultant;

	@Temporal(TemporalType.DATE)
	@Column
	@NotNull
	private Date calledDate;

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_position_id")
	@NotNull
	private ClientPosition clientPosition;

	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "called_by")
	@NotNull
	private Recruiter calledBy;

}
