package com.ccpt.repository;

import com.ccpt.model.Consultant;

public interface ConsultantRepository extends BaseRepository<Consultant, Integer> {

	Consultant findByFullname(String fullname);

	Consultant findByEmail(String email);

	Consultant findByPhone(String phone);
}
