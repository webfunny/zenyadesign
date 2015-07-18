package com.zenyadesign.project.mobile.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.zenyadesign.project.mobile.pojo.CaseType;

@Transactional
public interface CaseTypeDao extends CrudRepository<CaseType, Long> {

	public CaseType findByCode(String code);
	
	public List<CaseType> findAll();
	
}
