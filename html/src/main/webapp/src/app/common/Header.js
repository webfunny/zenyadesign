var React = require('react');  


var MENUDATA = [
	{"index":"0","menuName":"首页","menuModule":"Home"},
	{"index":"1","menuName":"公司简介","menuModule":"Company"},
	{"index":"2","menuName":"作品案例","menuModule":"Work"},
	{"index":"3","menuName":"服务内容","menuModule":"Service"},
	{"index":"4","menuName":"联系我们","menuModule":"Contact"}    
];

var Menu = React.createClass({  
	getInitialState: function() {
		return {
			data: {}
		};
	},
	init: function() {
		data = this.props.data;
	},
	handleItem: function(e) {
		var index = this.props.data.index;
		if(index=="0"){
			toHome("/");
		}else if(index=="1"){
			loadModule("home/Company","frameCenter",{});
		}else if(index=="2"){
			loadModule("home/Work","frameCenter",{});
		}else if(index=="3"){
			loadModule("home/Service","frameCenter",{});
		}else if(index=="4"){
			loadModule("home/Contact","frameCenter",{});
		}
	},
	componentDidMount: function() {
		this.init();
	},
	render: function () {
		data = this.props.data;
		if(data.index == "0"){
			return (
					<td width="60" onClick={this.handleItem}><a href="">{this.props.data.menuName}</a></td>
			)
		}else{
			return (
					<td width="60" onClick={this.handleItem}><a href="#">{this.props.data.menuName}</a></td>
			)
		}
	}  
});

var Header = React.createClass({ 
	getInitialState: function() {
		return {
			data: []
		}
	},
	handleItem: function(e) {
		if(index=="1"){
			loadModule("home/Company","frameCenter",{});
		}else if(index=="2"){
			loadModule("home/Work","frameCenter",{});
		}else if(index=="3"){
			loadModule("home/Service","frameCenter",{});
		}else if(index=="4"){
			loadModule("home/Contact","frameCenter",{});
		}
	},
	render: function () {  
		return (
				<table width="100%" height="50" border="0">
					<tr>
						<td width="50%" height="60">
							<img src="images/zenya-logo.png" width="300" height="51" />
						</td>
						<td width="50%" height="60">
							<table width="100%" height="100%" border="0">
								<tr>
									<td height="23">&nbsp;</td>
								</tr>
								<tr>
									<Menu data={MENUDATA[0]}/>
									<td width="20">|</td>
									<Menu data={MENUDATA[1]}/>
									<td width="20">|</td>
									<Menu data={MENUDATA[2]}/>
									<td width="20">|</td>
									<Menu data={MENUDATA[3]}/>
									<td width="20">|</td>
									<Menu data={MENUDATA[4]}/>
								</tr>
							</table>
						</td>
					</tr>
				</table>
		)
	}  
}); 

module.exports = Header;