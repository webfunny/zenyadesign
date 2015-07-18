var React = require('react');  

var Center = React.createClass({  
	render: function () {  
		return (
				<table width="100%" border="0" align="center">
				  <tr>
				    <td>
				    <div id="wrapper">
						<div className="fullwidthbanner-container">
							<div className="fullwidthbanner">
								<ul>
									<li data-transition="3dcurtain-horizontal" data-slotamount="15" data-masterspeed="300">
										<img src="images/slides/slide3.jpg"  width="100%" height="100%" alt="" />
									</li>
									<li data-transition="3dcurtain-vertical" data-slotamount="15" data-masterspeed="300" data-link="#">
										<img src="images/slides/slide5.jpg" width="100%" height="100%" alt="" />
									</li>
									<li data-transition="papercut" data-slotamount="15" data-masterspeed="300" data-link="#">
										<img src="images/slides/slide2.jpg" width="100%" height="100%" alt="" />
									</li>
									<li data-transition="turnoff" data-slotamount="15" data-masterspeed="300">
										<img src="images/slides/slide1.jpg" width="100%" height="100%" alt="" />
									</li>
									<li data-transition="flyin" data-slotamount="15" data-masterspeed="300">
										<img src="images/slides/slide6.jpg" width="100%" height="100%" alt="" />
									</li>
								</ul>
							</div>
						</div>
					</div>
					</td>
				  </tr>
				</table>
		)
	}  
});

module.exports = Center;