var React = require('react');  

window.loadModule = function (element,target,props){
	var object = React.createElement(require("./"+element),props);
	React.unmountComponentAtNode($('#'+target+'').get(0));
	React.render(object,$('#'+target+'').get(0));
}

window.toHome = function (url){
	window.location.href = window.location.href;
}

window.toAdmin = function (){
	loadModule("common/Header","frameHeader",{});
	loadModule("admin/CaseType","frameWork",{});
	loadModule("common/Footer","frameFooter",{});
}

window.toHomePage = function (){
	loadModule("common/Header","frameHeader",{});
	loadModule("home/Work","frameWork",{});
	loadModule("common/Footer","frameFooter",{});
}

function loadAdmin(){
	loadModule("common/Header","frameHeader",{});
	loadModule("admin/CaseType","frameWork",{});
	loadModule("common/Footer","frameFooter",{});
}

toHomePage();
