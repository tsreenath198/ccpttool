package com.ccpt.dto;

import java.util.UUID;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class LoginDTO extends IDEntityDTO {
	private String username;
	private String password;
	private String token = UUID.randomUUID().toString();
	private String role;
}
