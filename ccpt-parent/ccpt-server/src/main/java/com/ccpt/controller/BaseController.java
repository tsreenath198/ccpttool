package com.ccpt.controller;

import static com.ccpt.constants.CCPTConstants.GET_ALL;
import static com.ccpt.constants.CCPTConstants.ID_PARAM;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ccpt.model.BaseEntity;
import com.ccpt.service.BaseService;

public abstract class BaseController<T extends BaseEntity<ID>, ID> {

	@GetMapping(GET_ALL)
	@ResponseBody
	List<T> getAll() {
		return getService().getAll();
	}

	@GetMapping(ID_PARAM)
	@ResponseBody
	T get(@PathVariable ID id) {
		return getService().get(id);
	}

	@PostMapping
	@ResponseBody
	T create(@RequestBody @Valid T entity) {
		return getService().save(entity);
	}

	@PutMapping
	@ResponseBody
	T update(@RequestBody @Valid T entity) {
		return getService().update(entity);
	}

	@DeleteMapping(ID_PARAM)
	ResponseEntity<String> delete(@PathVariable ID id) {
		getService().delete(id);
		return new ResponseEntity<String>("Entity with id : " + id + " deleted", HttpStatus.OK);
	}

	public abstract BaseService<T, ID> getService();
}
