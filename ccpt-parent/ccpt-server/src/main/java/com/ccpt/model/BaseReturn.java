package com.ccpt.model;

import java.util.List;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BaseReturn {
	public Long noOfRecords;
	public List<?> list;
}