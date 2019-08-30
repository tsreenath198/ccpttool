package com.ccpt.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class DashboardModel {

	private List<InterviewSummaryStatistics> listOfInterviewSummaryStatistics;
	private List<OpenClientPosition> listOfOpenClientPositions;
	private List<OpenClientPosition> listOfDyingClientPositions;
	private List<CAByStatusHelper> listOfCAByStatus;

}
