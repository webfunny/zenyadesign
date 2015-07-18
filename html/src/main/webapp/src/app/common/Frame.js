var React = require('react');  

var Header = require('./Header');  
var Center = require('./Center'); 
var Footer = require('./Footer'); 

var Frame = React.createClass({  
	render: function () {  
		return (
				<div id="frameBody" style={{"width":"100%","height":"100%","margin":"0px"}}>
					<div id="frameHeader" style={{"width":"80%","margin":"auto"}}>
						<Header />
					</div>
					<div id="frameCenter" style={{"width":"100%","height":"auto","margin":"auto"}}>
						<Center />
					</div>
					<div id="frameFooter" style={{"width":"80%","margin":"auto"}}>
						<Footer />
					</div>
				</div>
		)
	}  
});

module.exports = Frame;