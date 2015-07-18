package com.zenyadesign.project.mobile.web.controller.api;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zenyadesign.project.mobile.dao.CaseItemDao;
import com.zenyadesign.project.mobile.dao.CaseSubItemDao;
import com.zenyadesign.project.mobile.dao.CaseTypeDao;
import com.zenyadesign.project.mobile.pojo.CaseItem;
import com.zenyadesign.project.mobile.pojo.CaseSubItem;
import com.zenyadesign.project.mobile.pojo.CaseType;

@Controller
@RequestMapping("/query")
public class QueryController {
	
	@Autowired
	private CaseTypeDao caseTypeDao;
	
	@Autowired
	private CaseItemDao caseItemDao;
	
	@Autowired
	private CaseSubItemDao caseSubItemDao;
	
	@RequestMapping(value = "/type", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseType> type(Model model) {
		List<CaseType> caseTypeList = caseTypeDao.findAll();
		return caseTypeList;
	}
	

	@RequestMapping(value = "/item", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseItem> item(@RequestParam(value = "typeId", required = false) String typeId,
			Model model) {
		List<CaseItem> caseItemList = new ArrayList<CaseItem>();
		if(typeId == null || typeId.equals("")){
			caseItemList = caseItemDao.findAll();
		}else{
			caseItemList = caseItemDao.findByTypeId(typeId);
		}
		return caseItemList;
	}
	
	@RequestMapping(value = "/subItem", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseSubItem> subItem(@RequestParam(value = "itemId", required = true) long itemId,
			Model model) {
		List<CaseSubItem> caseSubItemList = caseSubItemDao.findByItemId(itemId);
		return caseSubItemList;
	}
	
}