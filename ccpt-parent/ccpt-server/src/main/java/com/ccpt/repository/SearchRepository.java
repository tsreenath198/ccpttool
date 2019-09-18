package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ccpt.model.Search;

public interface SearchRepository extends BaseRepository<Search, Integer> {
	@Query(value = "SELECT * FROM Search WHERE active_flag=1 AND "
			+ "profile LIKE %:searchKey% " + "OR logic_or LIKE %:searchKey%" + " OR logic_and LIKE %:searchKey%"
			+ " OR refine1 LIKE %:searchKey% " + "OR refine2 LIKE %:searchKey% "
			+ "OR functional_area LIKE %:searchKey% " + "OR description LIKE %:searchKey%", nativeQuery = true)
	List<Search> search(@Param(value = "searchKey") String searchKey);
}
