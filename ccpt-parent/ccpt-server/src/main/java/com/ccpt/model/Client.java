package com.ccpt.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
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
public class Client extends IDEntity {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@Column(unique = true)
	@NotNull
	private String name;

	@Column
	private String address;

	@Column
	private String billingAddress;

	@Column
	private String phone;

	@Column
	private String gst;

	@Column
	private String industry;

	@Column
	private String email;

	@Column
	private String servicetaxNo;

	@Column
	private String serviceCharge;

	@Column
	private String guaranteePeriod;

	@Column
	private String creditPeriod;

	@Column
	private String website;

	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "clientId")
	private List<ClientContact> clientContacts;
}
