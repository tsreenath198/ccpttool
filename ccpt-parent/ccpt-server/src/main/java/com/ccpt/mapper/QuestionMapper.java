package com.ccpt.mapper;

import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.Mappings;

import com.ccpt.dto.QuestionDTO;
import com.ccpt.model.Question;

@Mapper
public interface QuestionMapper extends BaseMapper<QuestionDTO, Question, Integer> {
	@Mappings({ @Mapping(source = "creatorId", target = "creator.id"), @Mapping(source = "caId", target = "ca.id") })
	public Question toModel(QuestionDTO dto);
}
