var React = require('react'); 

var ItemRow = React.createClass({  
	getInitialState: function() {
		return {
			datas: [],
			modifyCaseItemUrl: "/api/caseItem/modify",
			deleteCaseItemUrl: "/api/caseItem/delete"
		};
	},
	handlerModify: function(e) {
		$("#id").val(this.props.data.id);
		$("#name").val(this.props.data.name);
		$("#typeId").val(this.props.data.typeId);
		$("#img").val(this.props.data.img);
		$("#sortBy").val(this.props.data.sortBy);
		$("#saveBtn").val("修改");
	},
	handlerDelete: function(e) {
		$.ajax({
		     url: this.state.deleteCaseItemUrl,
		     dataType: 'json',
		     type:'POST',
		     data:{id:this.props.data.id},
		     success: function(data) {
		    	 this.setState({datas: data});
		    	 loadModule("admin/CaseItem","frameCenter",{});
		     }.bind(this),
		     error: function(xhr, status, err) {
		    	 console.error(this.props.url, status, err.toString());
		     }.bind(this)
		});
	},
	render: function () {
		return (
				<tr>
					<td>{this.props.data.id}</td>
					<td>{this.props.data.name}</td>
					<td>{this.props.data.typeId}</td>
					<td>{this.props.data.img}</td>
					<td>{this.props.data.sortBy}</td>
					<td>{this.props.data.createBy}</td>
					<td>{this.props.data.createDate}</td>
					<td>{this.props.data.updateBy}</td>
					<td>{this.props.data.updateDate}</td>
					<td><a href="#" onClick={this.handlerModify}>编辑</a>&nbsp;|&nbsp;<a href="#" onClick={this.handlerDelete}>删除</a></td>
				</tr>
		)
	}  
});		

var CaseItem = React.createClass({ 
	getInitialState: function() {
		return {
			datas: [],
			items: [],
			queryItemUrl: "/api/caseItem/list",
			createItemUrl: "/api/caseItem/create",
			modifyItemUrl: "/api/caseItem/modify"
		};
	},
	loadItemList: function() {
		$.ajax({
		     url: this.state.queryItemUrl,
		     dataType: 'json',
		     type:'POST',
		     data:{},
		     success: function(data) {
		    	 this.setState({items: data});
		     }.bind(this),
		     error: function(xhr, status, err) {
		    	 console.error(this.state.queryTypeUrl, status, err.toString());
		     }.bind(this)
		});
	},
	handlerSaveCaseItem: function(e) {
		if($("#id").val()==null||$("#id").val()==""){
			var data = $("#caseItemForm").serialize();
			$.ajax({
			     url: this.state.createItemUrl,
			     dataType: 'json',
			     type:'POST',
			     data:data,
			     success: function(data) {
			    	 this.setState({datas: data});
			    	 loadModule("admin/CaseItem","frameCenter",{});
			     }.bind(this),
			     error: function(xhr, status, err) {
			    	 console.error(this.props.url, status, err.toString());
			     }.bind(this)
			});
		}else{
			var data = $("#caseItemForm").serialize();
			$.ajax({
			     url: this.state.modifyItemUrl,
			     dataType: 'json',
			     type:'POST',
			     data:data,
			     success: function(data) {
			    	 this.setState({datas: data});
			    	 loadModule("admin/CaseItem","frameCenter",{});
			     }.bind(this),
			     error: function(xhr, status, err) {
			    	 console.error(this.props.url, status, err.toString());
			     }.bind(this)
			});
		}
	},
	handlerType: function() {
		loadModule("admin/CaseType","frameCenter",{});
	},
	handlerItem: function() {
		loadModule("admin/CaseItem","frameCenter",{});
	},
	componentDidMount: function() {
		this.loadItemList();
	},
	render: function () { 
		var itemRows = [];
		this.state.items.forEach(function(data) {
			itemRows.push(<ItemRow data={data} key={data.id} />);
		}.bind(this));
		
		return (
				<div style={{"float":"left","width":"100%"}}>
					<table width="300" height="50px" border="0" align="center" style={{"margin-left":"0px","margin-top":"14px"}}>
						<tr><td><a href="#" onClick={this.handlerType}>分类管理</a></td></tr>
						<tr><td><a href="#" onClick={this.handlerItem}>作品管理</a></td></tr>
					</table>
					<table width="80%" border="1" align="center" style={{"text-align":"center","margin-left":"200px","margin-top":"-50px"}}>
						<tbody>
						<tr>
							<th>序号</th>
							<th>作品名称</th>
							<th>作品分类</th>
							<th>图片地址</th>
							<th>排序</th>
							<th>创建人</th>
							<th>创建时间</th>
							<th>修改人</th>
							<th>修改时间</th>
							<th>操作</th>
						</tr>
						{itemRows}
						</tbody>
					</table>
					<form metho="post" id="caseItemForm" action="#">
						<table width="400" border="1" style={{"margin-left":"200px","margin-top":"20px"}}>
							<tr>
								<td>作品名称</td>
								<td width="200"><input type="hidden" id="id" name="id" /><input type="text" id="name" name="name" /></td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>作品分类</td>
								<td width="200"><input type="text" id="typeId" name="typeId" /></td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>作品图片</td>
								<td width="200"><input type="text" id="img" name="img" /></td>
								<td>&nbsp;</td>
							</tr>
							<tr>
								<td>排序</td>
								<td width="200"><input type="text" id="sortBy" name="sortBy" /></td>
								<td align="left"><input type="button" id="saveBtn" name="saveBtn" value="新增" onClick={this.handlerSaveCaseItem}/></td>
							</tr>
						</table>
					</form>
				</div>
		)
	}  
});

module.exports = CaseItem;