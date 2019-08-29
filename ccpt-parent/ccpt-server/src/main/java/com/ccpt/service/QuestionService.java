package com.ccpt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ccpt.model.Question;
import com.ccpt.repository.BaseRepository;
import com.ccpt.repository.QuestionRepository;

@Service
public class QuestionService extends BaseService<Question, Integer> {
	public QuestionService() {
		super("Question");
	}

	@Autowired
	private QuestionRepository questionRepository;

	@Override
	public BaseRepository<Question, Integer> getRepository() {
		return questionRepository;
	}

	public List<Question> searchBySkills(String skills) {
		return questionRepository.searchBySkills(skills);
	}

	public List<Question> searchByCAID(Integer caId) {
		return questionRepository.searchByCAID(caId);
	}

}