package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientPositionDTO extends IDEntityDTO {
	private String role;
	private String experience;
	private String requiredSkills;
	private String requiredPositions;
	private String minCtc;
	private String maxCtc;
	private String cpstatus;
	private Integer closedBy;
	private Integer assignedTo;
	private String generatedCode;
	private Integer clientId;
	private String location;
}
