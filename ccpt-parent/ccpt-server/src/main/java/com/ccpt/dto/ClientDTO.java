package com.ccpt.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientDTO extends FileSupportEntityDTO {
	private String name;
	private String address;
	private String billingAddress;
	private String phone;
	private String gst;
	private String industry;
	private String email;
	private String servicetaxNo;
	private String serviceCharge;
	private String guaranteePeriod;
	private String creditPeriod;
	private String website;
	private String contactPersonName;
	private String contactPersonDesignation;
	private List<ClientContactDTO> clientContacts;
}
