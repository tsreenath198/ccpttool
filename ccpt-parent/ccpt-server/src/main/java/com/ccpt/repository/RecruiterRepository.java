package com.ccpt.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Recruiter;

public interface RecruiterRepository extends CrudRepository<Recruiter, Integer> {
	public List<Recruiter> findAllByOrderByUpdatedDateAsc();
}
