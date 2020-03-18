package com.ccpt.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class AdvanceSearchDto {
	private String skills;
	private Integer minExpYrs=0;
	private Integer minExpMnths=0;
	private String location;
	private Integer maxExpYrs;
	private Integer maxExpMnths;
	private String noticePeriod;
}
