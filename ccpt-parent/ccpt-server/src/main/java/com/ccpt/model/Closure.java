package com.ccpt.model;

public class Closure {
	private String clientName;
	private String ConsultantName;
	private double minCtc;

	public String getClientName() {
		return clientName;
	}

	public void setClientName(String clientName) {
		this.clientName = clientName;
	}

	public String getConsultantName() {
		return ConsultantName;
	}

	public void setConsultantName(String consultantName) {
		ConsultantName = consultantName;
	}

	public double getMinCtc() {
		return minCtc;
	}

	public void setMinCtc(double minCtc) {
		this.minCtc = minCtc;
	}

	@Override
	public String toString() {
		return "Closure [clientName=" + clientName + ", ConsultantName=" + ConsultantName + ", minCtc=" + minCtc + "]";
	}

}
