package com.ccpt.repository;

import java.util.List;

import com.ccpt.model.Consultant;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	List<Consultant> findByPhoneOrFullnameOrEmail(String phone, String fullname, String email);
}
