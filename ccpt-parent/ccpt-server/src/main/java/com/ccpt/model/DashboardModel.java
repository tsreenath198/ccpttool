package com.ccpt.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DashboardModel {
	private List<InterviewSummaryStatistics> interviewSummaryStatistics;
	private List<OpenClientPosition> openClientPositions;
	private List<OpenClientPosition> dyingClientPositions;
	private List<DashboardCAStatistics> dashboardCAStatistics;
	private List<PaymentStatistics> paymentStatistics;
}
