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

import com.ccpt.dto.BaseEntityDTO;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.model.BaseEntity;
import com.ccpt.service.BaseService;

public abstract class BaseController<DTO extends BaseEntityDTO<ID>, MODEL extends BaseEntity<ID>, ID> {

	@GetMapping(GET_ALL)
	@ResponseBody
	List<MODEL> getAll() {
		return getService().getAll();
	}

	@GetMapping(ID_PARAM)
	@ResponseBody
	MODEL get(@PathVariable ID id) {
		return getService().get(id);
	}

	@PostMapping
	@ResponseBody
	MODEL create(@RequestBody @Valid DTO dto) {
		MODEL model = getMapper().toModel(dto);
		validateAndClean(model);
		MODEL result = getService().save(model);
		return get(result.getKey());
	}

	@PutMapping
	@ResponseBody
	MODEL update(@RequestBody @Valid DTO dto) {
		MODEL model = getMapper().toModel(dto);
		validateAndClean(model);
		MODEL result = getService().update(model);
		return get(result.getKey());
	}

	@DeleteMapping(ID_PARAM)
	ResponseEntity<String> delete(@PathVariable ID id) {
		getService().delete(id);
		return new ResponseEntity<String>("Entity with id : " + id + " deleted", HttpStatus.OK);
	}

	public abstract BaseService<MODEL, ID> getService();

	public abstract BaseMapper<DTO, MODEL, ID> getMapper();

	protected void validateAndClean(MODEL model) {

	}
}
