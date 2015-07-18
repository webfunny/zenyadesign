package com.zenyadesign.project.mobile.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.zenyadesign.project.mobile.pojo.CaseItem;

@Transactional
public interface CaseItemDao extends CrudRepository<CaseItem, Long> {
	
	public List<CaseItem> findByTypeId(String typeId);
	
	public List<CaseItem> findAll();

}
