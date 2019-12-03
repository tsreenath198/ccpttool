package com.ccpt.controller;

import static com.ccpt.constants.CCPTConstants.ACTIVATE_ID_PARAM;
import static com.ccpt.constants.CCPTConstants.GET_ALL;
import static com.ccpt.constants.CCPTConstants.ID_PARAM;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.ccpt.dto.BaseEntityDTO;
import com.ccpt.dto.GenericResponse;
import com.ccpt.mapper.BaseMapper;
import com.ccpt.model.BaseEntity;
import com.ccpt.model.BaseReturn;
import com.ccpt.service.BaseService;

public abstract class BaseController<DTO extends BaseEntityDTO<ID>, MODEL extends BaseEntity<ID>, ID> {
	/* Retrieves all records from the table */
	@GetMapping(GET_ALL)
	@ResponseBody
	BaseReturn getAll(@RequestParam(defaultValue = "0") Integer pageNo,
			@RequestParam(defaultValue = "100") Integer pageSize, @RequestParam(defaultValue = "id") String sortBy) {
		return getService().getAll(pageNo, pageSize, sortBy);
	}

	/* Retrieves a record from the table based on given id */
	@GetMapping(ID_PARAM)
	@ResponseBody
	MODEL get(@PathVariable ID id) {
		return getService().get(id, true);
	}

	/* Creates new record into the table */
	@PostMapping
	@ResponseBody
	MODEL create(@RequestBody @Valid DTO dto) {
		MODEL model = getMapper().toModel(dto);
		validateAndClean(model);
		MODEL result = getService().save(model);
		return get(result.getKey());
	}

	/* Updates existing record in the table */
	@PutMapping
	@ResponseBody
	MODEL update(@RequestBody @Valid DTO dto) {
		MODEL model = getMapper().toModel(dto);
		validateAndClean(model);
		MODEL result = getService().update(model);
		return get(result.getKey());
	}

	/* Updates active flag to 0 in the table */
	@DeleteMapping(ID_PARAM)
	ResponseEntity<GenericResponse> delete(@PathVariable ID id) {
		getService().delete(id);
		return new ResponseEntity<GenericResponse>(new GenericResponse("Entity with id : " + id + " deleted"),
				HttpStatus.OK);
	}

	/* Updates active flag to 1 in the table */
	@GetMapping(ACTIVATE_ID_PARAM)
	ResponseEntity<GenericResponse> activate(@PathVariable ID id) {
		getService().activate(id);
		return new ResponseEntity<GenericResponse>(new GenericResponse("Entity with id : " + id + " Activated"),
				HttpStatus.OK);
	}

	public abstract BaseService<MODEL, ID> getService();

	public abstract BaseMapper<DTO, MODEL, ID> getMapper();

	protected void validateAndClean(MODEL model) {

	}
}
