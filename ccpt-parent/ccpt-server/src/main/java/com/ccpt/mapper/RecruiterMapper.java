package com.ccpt.mapper;

import org.mapstruct.Mapper;

import com.ccpt.dto.RecruiterDTO;
import com.ccpt.model.Recruiter;

@Mapper
public interface RecruiterMapper extends BaseMapper<RecruiterDTO, Recruiter, Integer> {

}
