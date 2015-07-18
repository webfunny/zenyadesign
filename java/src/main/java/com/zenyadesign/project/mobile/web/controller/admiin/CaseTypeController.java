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

import com.zenyadesign.project.mobile.dao.CaseTypeDao;
import com.zenyadesign.project.mobile.pojo.CaseType;

@Controller
@RequestMapping("/caseType")
public class CaseTypeController {
	
	@Autowired
	private CaseTypeDao caseTypeDao;
	
	@RequestMapping(value = "/create", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseType create(
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "code", required = true) String code,
			Model model) {
		CaseType entity = caseTypeDao.findByCode(code);
		CaseType result = null;
		if(entity == null){
			entity = new CaseType(name,code);
			entity.setCreateBy("system");
			entity.setCreateDate(new Date());
			result = caseTypeDao.save(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/modify", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseType modify(
			@RequestParam(value = "id", required = true) long id,
			@RequestParam(value = "name", required = true) String name,
			@RequestParam(value = "code", required = true) String code,
			Model model) {
		CaseType entity = caseTypeDao.findOne(id);
		CaseType result = null;
		if(entity!=null){
			entity.setName(name);
			entity.setCode(code);
			entity.setUpdateBy("system");
			entity.setUpdateDate(new Date());
			result = caseTypeDao.save(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/delete", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public CaseType delete(@RequestParam(value = "id", required = true) long id,
			Model model) {
		CaseType entity = caseTypeDao.findOne(id);
		CaseType result = null;
		if(entity!=null){
			caseTypeDao.delete(entity);
		}
		return result;
	}
	
	@RequestMapping(value = "/list", produces = "application/json;charset=UTF-8", method = RequestMethod.POST)
	@ResponseBody
	public List<CaseType> list(
			@RequestParam(value = "code", required = false) String code,
			Model model) {
		List<CaseType> caseTypeList = new ArrayList<CaseType>();
		if(code == null || code.trim().equals("")){
			caseTypeList = caseTypeDao.findAll();
		}else{
			CaseType entity = caseTypeDao.findByCode(code);
			if(entity!=null){
				caseTypeList.add(entity);
			}
		}
		return caseTypeList;
	}
}