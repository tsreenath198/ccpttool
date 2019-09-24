package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientContactDTO extends IDEntityDTO {

	private String fullname;
	private String phone;
	private String email;
	private String salutation;
	private String contactPersonName;
	private String contactPersonDesignation;
}