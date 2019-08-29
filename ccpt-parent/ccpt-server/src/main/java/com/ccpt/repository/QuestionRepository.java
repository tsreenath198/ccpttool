package com.ccpt.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Question;

@Transactional
public interface QuestionRepository extends BaseRepository<Question, Integer> {

	@Query(value = "SELECT * FROM question WHERE active_flag=1 AND skills LIKE %:skills%", nativeQuery = true)
	List<Question> searchBySkills(@Param(value = "skills") String skills);

	@Query(value = "SELECT * FROM question WHERE active_flag=1 AND ca_id LIKE %:caId%", nativeQuery = true)
	List<Question> searchByCAID(@Param(value = "caId") Integer caId);

}
