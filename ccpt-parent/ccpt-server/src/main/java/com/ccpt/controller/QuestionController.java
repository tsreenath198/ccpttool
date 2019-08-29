package com.ccpt.controller;

import java.util.List;

import javax.validation.ValidationException;

import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.ccpt.constants.CCPTConstants;
import com.ccpt.dto.QuestionDTO;
import com.ccpt.dto.QuestionWrapper;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.mapper.QuestionMapper;
import com.ccpt.model.ClientApplication;
import com.ccpt.model.Question;
import com.ccpt.model.Recruiter;
import com.ccpt.service.BaseService;
import com.ccpt.service.ClientApplicationService;
import com.ccpt.service.QuestionService;
import com.ccpt.service.RecruiterService;

@Controller
@CrossOrigin
@RequestMapping(CCPTConstants.QUESTION)
public class QuestionController extends BaseController<QuestionDTO, Question, Integer> {

	@Autowired
	private QuestionService questionService;

	@Autowired
	private RecruiterService recruiterService;

	@Autowired
	private ClientApplicationService clientApplicationService;

	@Override
	public BaseService<Question, Integer> getService() {
		return questionService;
	}

	@Override
	public BaseMapper<QuestionDTO, Question, Integer> getMapper() {
		return Mappers.getMapper(QuestionMapper.class);
	}

	@GetMapping("/searchBySkills")
	public ResponseEntity<List<Question>> searchBySkills(@RequestParam String skills) {
		List<Question> result = questionService.searchBySkills(skills);
		return new ResponseEntity<List<Question>>(result, HttpStatus.OK);
	}

	@GetMapping("/searchByCAID")
	public ResponseEntity<List<Question>> searchByCAID(@RequestParam Integer caId) {
		List<Question> result = questionService.searchByCAID(caId);
		return new ResponseEntity<List<Question>>(result, HttpStatus.OK);
	}

	@PostMapping("/save")
	public ResponseEntity<Void> save(@RequestParam Integer caId, @RequestParam Integer userId,
			@RequestBody QuestionWrapper questionwrapper) {
		Question dto;
		List<String> questionsList = questionwrapper.getQuestions();
		ClientApplication ca = clientApplicationService.get(caId);
		// ca.getClientPosition().getRequiredSkills();
		Recruiter creator = recruiterService.get(userId);
		for (String question : questionsList) {
			dto = new Question();
			dto.setQuestion(question);
			ca.setId(caId);
			dto.setCa(ca);
			dto.setCreator(creator);
			questionService.save(dto);
		}
		return new ResponseEntity<Void>(HttpStatus.OK);
	}

	@Override
	protected void validateAndClean(Question model) {
		if (model.getCreator() == null || model.getCreator().getId() == null) {
			throw new ValidationException("Application Creator cannot be null");
		} else {
			model.setCreator(recruiterService.get(model.getCreator().getId()));
		}
		if (model.getCa() == null || model.getCa().getId() == null) {
			throw new ValidationException("Client Application cannot be null");
		} else {
			model.setCa(clientApplicationService.get(model.getCa().getId()));
		}
	}
}