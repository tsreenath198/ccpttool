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
public class ClientCallHistory extends IDEntity {

	@ManyToOne(cascade = CascadeType.MERGE)
	@JoinColumn(name = "client_position_id")
	@NotNull
	private ClientPosition clientPosition;

	@Temporal(TemporalType.DATE)
	@Column
	@NotNull
	private Date calledDate;

}
