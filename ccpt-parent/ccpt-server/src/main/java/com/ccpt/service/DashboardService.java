package com.ccpt.service;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.ClientPosition;
import com.ccpt.model.OpenClientPosition;

@Service
public class DashboardService {
	@Autowired
	private ClientPositionService clientPositionService;

	public List<OpenClientPosition> getOpenClientPositions() {
		List<OpenClientPosition> listOfPositions = new ArrayList<OpenClientPosition>();
		List<ClientPosition> clientPositionList = clientPositionService.getAllOpenCP();
		for (ClientPosition clientPosition : clientPositionList) {
			OpenClientPosition openClientPositions = new OpenClientPosition();
			openClientPositions.setClientName(clientPosition.getClient().getName());
			openClientPositions.setGeneratedCode(clientPosition.getGeneratedCode());
			openClientPositions.setRecruiterName(clientPosition.getAssignedTo().getFullname());
			openClientPositions.setCreatedDate(clientPosition.getCreatedDate());
			openClientPositions.setClientId(clientPosition.getClient().getId());
			listOfPositions.add(openClientPositions);
		}
		return listOfPositions;
	}

	public List<OpenClientPosition> getDyingClientPositions() throws ParseException {
		List<OpenClientPosition> listOfPositions = new ArrayList<OpenClientPosition>();
		List<ClientPosition> clientPositionList = clientPositionService.getLastWeekDyingCP(7);
		for (ClientPosition clientPosition : clientPositionList) {
			OpenClientPosition openClientPositions = new OpenClientPosition();
			openClientPositions.setClientName(clientPosition.getClient().getName());
			openClientPositions.setGeneratedCode(clientPosition.getGeneratedCode());
			openClientPositions.setRecruiterName(clientPosition.getAssignedTo().getFullname());
			openClientPositions.setCreatedDate(clientPosition.getCreatedDate());
			openClientPositions.setClientId(clientPosition.getClient().getId());
			listOfPositions.add(openClientPositions);
		}
		return listOfPositions;
	}
}