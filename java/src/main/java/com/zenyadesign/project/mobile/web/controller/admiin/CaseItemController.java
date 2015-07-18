package com.zenyadesign.project.mobile.web.controller.admiin;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.zenyadesign.project.mobile.dao.CaseItemDao;
import com.zenyadesign.project.mobile.pojo.CaseItem;

@Controller
@RequestMapping("/caseItem")
public class CaseItemController {
	
	@Autowired
	private CaseItemDao caseItemDao;
	
	@RequestMapping(value = "/create", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseItem create(
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "typeId", required = true) String typeId,
			@RequestParam(value = "img", required = true) String img,
			@RequestParam(value = "sortBy", required = false) long sortBy,
			Model model) {
		CaseItem entity = new CaseItem(name, typeId, img, sortBy);
		entity.setCreateBy("system");
		entity.setCreateDate(new Date());
		CaseItem result = caseItemDao.save(entity);
		return result;
	}
	
	@RequestMapping(value = "/modify", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseItem modify(
			@RequestParam(value = "id", required = true) long id,
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "typeId", required = true) String typeId,
			@RequestParam(value = "img", required = true) String img,
			@RequestParam(value = "sortBy", required = false) long sortBy,
			Model model) {
		CaseItem entity = caseItemDao.findOne(id);
		CaseItem result = null;
		if(entity!=null){
			entity.setName(name);
			entity.setTypeId(typeId);
			entity.setImg(img);
			entity.setSortBy(sortBy);
			entity.setUpdateBy("system");
			entity.setUpdateDate(new Date());
			result = caseItemDao.save(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/delete", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseItem delete(@RequestParam(value = "id", required = true) long id,
			Model model) {
		CaseItem entity = caseItemDao.findOne(id);
		CaseItem result = null;
		if(entity!=null){
			caseItemDao.delete(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/list", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseItem> list(
			@RequestParam(value = "typeId", required = false) String typeId,
			Model model) {
		List<CaseItem> caseItemList = new ArrayList<CaseItem>();
		if(typeId == null || typeId.trim().equals("")){
			caseItemList = caseItemDao.findAll();
		}else{
			caseItemList = caseItemDao.findByTypeId(typeId);
		}
		return caseItemList;
	}
}