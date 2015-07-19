var React = require('react'); 

var WorkCols = React.createClass({  
	getInitialState: function() {
		return {
			data: {}
		};
	},
	handleItem: function(e) {
		loadModule("work/WorkDetail","frameCenter",this.props);
	},
	render: function () {
		if(this.props.data.name == null){
			return (
					<td>
				    	<div style={{"text-align":"center","margin":"0px","display":"block"}}>
	            				<p style={{"text-align":"center","width":"200px","height":"50px","word-break":"break-all"}}>{this.props.data.name}</p>
		                 </div>
					</td>
			)
		}else{
			return (
					<td>
				    	<div style={{"text-align":"center","margin":"0px"}}>
            				<a href="#" onClick={this.handleItem}>
            					<img src={this.props.data.img} width="220" height="145"/>
            				</a>
            				<p style={{"text-align":"center","width":"200px","height":"50px","word-break":"break-all"}}>{this.props.data.name}</p>
		                 </div>
					</td>
			)
		}
	}  
});

var WorkRow = React.createClass({  
	getInitialState: function() {
		return {
			datas: []
		};
	},
	render: function () {
		var cols = [];
		this.props.datas.forEach(function(data) {
			cols.push(<WorkCols data={data} key={data.id} />);
		}.bind(this));
		return (
				<tr>
			    	{cols}
			    </tr>
		)
	}  
});
		
var TypeRow = React.createClass({  
	getInitialState: function() {
		return {
			datas: [],
			queryItemUrl: "/api/query/item",
		};
	},
	handlerQueryItem: function(e) {
		$.ajax({
		     url: this.state.queryItemUrl,
		     dataType: 'json',
		     type:'POST',
		     data:{typeId:this.props.data.code},
		     success: function(data) {
		    	 this.setState({datas: data});
		    	 loadModule("home/Work","frameCenter",{data:data});
		     }.bind(this),
		     error: function(xhr, status, err) {
		    	 console.error(this.props.url, status, err.toString());
		     }.bind(this)
		});
	},
	render: function () {
		return (
				<tr><td><a href="#" onClick={this.handlerQueryItem}>{this.props.data.name}</a></td></tr>
		)
	}  
});		

var Work = React.createClass({ 
	getInitialState: function() {
		return {
			datas: [],
			types: [],
			queryItemUrl: "/api/query/item",
			queryTypeUrl: "/api/query/type"
		};
	},
	loadTypeList: function() {
		$.ajax({
		     url: this.state.queryTypeUrl,
		     dataType: 'json',
		     type:'POST',
		     data:{},
		     success: function(data) {
		    	 this.setState({types: data});
		     }.bind(this),
		     error: function(xhr, status, err) {
		    	 console.error(this.state.queryTypeUrl, status, err.toString());
		     }.bind(this)
		});
	},
	loadWorkList: function() {
		if(this.props.data!=null){
			this.setState({datas: this.props.data});
		}else{
			$.ajax({
				url: this.state.queryItemUrl,
				dataType: 'json',
				type:'POST',
				data:{},
				success: function(data) {
					this.setState({datas: data});
				}.bind(this),
				error: function(xhr, status, err) {
					console.error(this.state.queryItemUrl, status, err.toString());
				}.bind(this)
			});
		}
		
	},
	componentDidMount: function() {
		this.loadTypeList();
		this.loadWorkList();
	},
	render: function () { 
		var index = 1;
		var rows = [];
		var cols = [];
		this.state.datas.forEach(function(data) {
			cols.push(data);
			if(index%3==0){
				rows.push(<WorkRow datas={cols} key={data.id} />);
				cols = [];
			}
			index++;
		}.bind(this));
		rows.push(<WorkRow datas={cols} key={index} />);
		for(var i = 0; i< index%3; i++){
			cols.push({});
		}
		
		var typeRows = [];
		this.state.types.forEach(function(data) {
			typeRows.push(<TypeRow data={data} key={data.id} />);
		}.bind(this));
		return (
				<div style={{"float":"left","width":"100%","margin-top":"0px"}}>
					<div style={{"float":"left"}}>
					<table width="300" height="100%" border="0" align="center" style={{"margin-left":"0px","margin-top":"0px"}}>
						{typeRows}
					</table>
					</div>
					<div style={{"float":"left"}}>
					<table width="100%" height="100%" border="0" align="center" style={{"text-align":"center","margin-left":"0px","margin-top":"0px"}}>
						{rows}
					</table>
					</div>
				</div>
		)
	}  
});

module.exports = Work;