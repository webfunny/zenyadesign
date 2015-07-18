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

import com.zenyadesign.project.mobile.dao.CaseSubItemDao;
import com.zenyadesign.project.mobile.pojo.CaseSubItem;

@Controller
@RequestMapping("/caseSubItem")
public class CaseSubItemController {
	
	@Autowired
	private CaseSubItemDao caseSubItemDao;
	
	@RequestMapping(value = "/create", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseSubItem create(
			@RequestParam(value = "itemId", required = true) long itemId,
			@RequestParam(value = "imgs", required = true) String [] imgs,
			Model model) {
		List<CaseSubItem> entities = new ArrayList<CaseSubItem>();
		if(imgs != null && imgs.length > 0){
			for(String img : imgs){
				CaseSubItem entity = new CaseSubItem(itemId, img);
				entity.setCreateBy("system");
				entity.setCreateDate(new Date());
				entities.add(entity);
			}
			caseSubItemDao.save(entities);
		}
		return null;
	}
	
	@RequestMapping(value = "/modify", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseSubItem modify(
			@RequestParam(value = "id", required = true) long id,
			@RequestParam(value = "itemId", required = true) long itemId,
			@RequestParam(value = "img", required = true) String img,
			Model model) {
		CaseSubItem entity = caseSubItemDao.findOne(id);
		CaseSubItem result = null;
		if(entity!=null){
			entity.setItemId(itemId);
			entity.setImg(img);
			entity.setUpdateBy("system");
			entity.setUpdateDate(new Date());
			result = caseSubItemDao.save(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/delete", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseSubItem delete(@RequestParam(value = "id", required = true) long id,
			Model model) {
		CaseSubItem entity = caseSubItemDao.findOne(id);
		CaseSubItem result = null;
		if(entity!=null){
			caseSubItemDao.delete(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/list", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseSubItem> list(
			@RequestParam(value = "itemId", required = true) long itemId,
			Model model) {
		List<CaseSubItem> caseSubItemList = new ArrayList<CaseSubItem>();
		caseSubItemList = caseSubItemDao.findByItemId(itemId);
		return caseSubItemList;
	}
}