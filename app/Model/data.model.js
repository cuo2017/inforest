var mongoose = require('mongoose');

//项目数据模型
var projectSchema = mongoose.Schema({
	projnum: String,
	name: String,
	type: String,
	size: String,
	location: String,
	funding: String,
	progress: String,
	company: String,
	resp: String,
	start: String,
	description: String,
	document: [{
		cert_name: String,
		cert_url: String,
		cert_date: String,
	}],
	img: String,
	history: [{
		date: String,
		username: String,
		img: String,
		description: String,
	}],
});
var Project = mongoose.model("project",projectSchema);


//用户数据模型
var userSchema = mongoose.Schema({
	usernum: String,
	username: String,
	location: String,
	phonenum: String,
	company: String,
	proj: [{
		name: String,
		projnum: String,
	}]
});

//天气数据模型
var dataSchema = mongoose.Schema({
	datanum: String,
	date: String,
	temp: String,
	humi: String,
	illu: String,
	soilwater: String,
	soiltemp: String,
	soilfert: String,
});



var User = mongoose.model("user",userSchema);
var Data = mongoose.model("data",dataSchema);
