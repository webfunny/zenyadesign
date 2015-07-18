var React = require('react');  

window.loadModule = function (element,target,props){
	var object = React.createElement(require("./"+element),props);
	React.unmountComponentAtNode($('#'+target+'').get(0));
	React.render(object,$('#'+target+'').get(0));
}

window.toHome = function (url){
	window.location.href = window.location.href;
}

loadModule("common/Header","frameHeader",{});
loadModule("common/Footer","frameFooter",{});