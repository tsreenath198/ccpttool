package com.ccpt.model;

import java.util.Date;

public interface PaymentStatistics {

	public Integer getId();

	public String getCompanyName();

	public String getCandidateName();

	public Date getJoiningDate();

	public Float getAmountReceivable();

	public String getPendingSince();

}
