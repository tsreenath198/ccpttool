/*package com.ccpt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.ccpt.model.Closure;

public interface ClosureRepository extends CrudRepository<Closure, Integer> {
	@Query("SELECT  r.fullname, count(*) FROM ClientApplication ca left outer join Recruiter r on ca.closedBy = r.id where ca.closedBy is not null group by r.id, r.fullname ")
	List<Closure> getAllClosures();

}
*/