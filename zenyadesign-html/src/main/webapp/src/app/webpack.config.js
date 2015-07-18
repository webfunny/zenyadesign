module.exports = {
    entry : [ './main.js' ],
	output : {
		path : "../../js",
		publicPath : "/",
		filename : 'app-bundle.js'
	},
	resolve : {
		extensions : [ '', '.js', '.jsx' ]
	},
	module : {
		loaders : [ {
			test: /\.js$/, 
			loader: 'jsx-loader?harmony'
		} ,, {
			test : /\.css$/,
			loader : 'style-loader!css-loader'
		} ,{
			test: /\.(png|jpg)$/, 
			loader: 'url-loader?limit=8192'
		} ]
	}
};