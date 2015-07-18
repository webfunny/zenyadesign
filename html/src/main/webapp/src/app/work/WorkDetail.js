var React = require('react'); 

var WorkCols = React.createClass({  
	getInitialState: function() {
		return {
			data: {}
		};
	},
	handleItem: function(e) {
		loadModule("home/WorkDetail","frameCenter",{});
	},
	render: function () {
		return (
				<td style={{"width":"100%","height":"100%"}}>
			    	<div style={{"text-align":"center","margin":"10px"}}>
	            		<div >
	            			<div >
	            				<a href="#" >
	            					<img src={this.props.data.img} width="100%" height="100%"/>
	            				</a>
	            			</div>
	            			<div >
	                            <p>{this.props.data.name}&nbsp;-&nbsp;{this.props.data.storeName}</p>
	                        </div>
	            		</div>
	                 </div>
				</td>
		)
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

var WorkDetail = React.createClass({ 
	getInitialState: function() {
		return {
			datas: [],
			url: "/api/query/subItem"
		};
	},
	loadWorkList: function() {
		$.ajax({
		     url: this.state.url,
		     dataType: 'json',
		     type:'POST',
		     data:{itemId:this.props.data.id},
		     success: function(data) {
		    	 this.setState({datas: data});
		     }.bind(this),
		     error: function(xhr, status, err) {
		    	 console.error(this.props.url, status, err.toString());
		     }.bind(this)
		});
	},
	componentDidMount: function() {
	    this.loadWorkList();
	},
	render: function () { 
		var index = 1;
		var rows = [];
		var cols = [];
		this.state.datas.forEach(function(data) {
			cols.push(data);
			if(index%1==0){
				rows.push(<WorkRow datas={cols} key={data.id} />);
				cols = [];
			}
			index++;
		}.bind(this));
		rows.push(<WorkRow datas={cols} key={index} />);
		return (
				<table width="80%" border="0" align="center" style={{"text-align":"center","margin":"auto"}}>
				    {rows}
				</table>
		)
	}  
});

module.exports = WorkDetail;