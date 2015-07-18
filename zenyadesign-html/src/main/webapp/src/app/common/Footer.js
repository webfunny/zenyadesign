var React = require('react');  

var Footer = React.createClass({  
	render: function () {  
		return (
				<table width="100%" height="12" border="0" style={{"text-align":"center","margin":"20px"}}>
				  <tr>
				    <td><div align="center">Contact Us: 131 2068 1656 </div></td>
				    <td><div align="center"><code> Copyright @ ZENYA DESIGN 2014. All Rights Reserved.</code></div></td>
				    <td><div align="center"><code>沪ICP备14043482号-1</code></div></td>
				  </tr>
				</table>
		)
	}  
});

module.exports = Footer;