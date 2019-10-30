package com.ccpt.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ClientPositionDTO extends FileSupportEntityDTO {
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
	private String qualification;
	private String availability;
	private String jobType;
	private String almaConnectURL;
	private String shineURL;
	private String naukriURL;
	private Date shinePosting;
	private Date naukriPosting;
	private Date almaConnectPosting;
	private Date facebookPosting;
	private Date twitterPosting;
	private Date shineMassMailing;
	private Date naukriMassMailing;
	private Integer shineMassMailingCount;
	private Integer naukriMassMailingCount;
}
