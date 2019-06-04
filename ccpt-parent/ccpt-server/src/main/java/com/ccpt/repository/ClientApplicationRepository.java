package com.ccpt.repository;

import javax.transaction.Transactional;

import com.ccpt.model.ClientApplication;

@Transactional
public interface ClientApplicationRepository extends BaseRepository<ClientApplication, Integer> {

}
