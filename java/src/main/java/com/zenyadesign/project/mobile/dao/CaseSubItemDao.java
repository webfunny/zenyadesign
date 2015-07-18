package com.zenyadesign.project.mobile.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.zenyadesign.project.mobile.pojo.CaseSubItem;

@Transactional
public interface CaseSubItemDao extends CrudRepository<CaseSubItem, Long> {

	public List<CaseSubItem> findByItemId(long itemId);

}
