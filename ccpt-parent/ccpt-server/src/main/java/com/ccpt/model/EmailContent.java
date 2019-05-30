package com.ccpt.model;

import java.util.List;

public class EmailContent {
	private int id;
	private List<String> to;
	private String subject;
	private String body;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public List<String> getTo() {
		return to;
	}

	public void setTo(List<String> to) {
		this.to = to;
	}

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getBody() {
		return body;
	}

	public void setBody(String body) {
		this.body = body;
	}

	@Override
	public String toString() {
		return "EmailContent [id=" + id + ", to=" + to + ", subject=" + subject + ", body=" + body + "]";
	}
}
