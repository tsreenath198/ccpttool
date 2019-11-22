package com.ccpt.model;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class CP {
	private Integer id;
	private String almaConnectURL;
	private String shineURL;
	private String naukriURL;
	private Date shinePosting;
	private Date naukriPosting;
	private Date facebookPosting;
	private Date twitterPosting;
	private Date shineMassMailing;
	private Date naukriMassMailing;
	private Integer shineMassMailingCount;
	private Integer naukriMassMailingCount;
}
