var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path  = require ('path');



var db = mongoose.connect("mongodb://127.0.0.1:27017/inforest");

require('./app/Model/data.model');
var Project = mongoose.model('project');
var User = mongoose.model("user");
var Data = mongoose.model("data");


var app = express();
app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});




var projectController = {

	// projects
	getProject: function(req,res,next){
		Project.find().exec(function(err,docs){
			console.log("获取项目信息成功");
			return res.json(docs);
		});
	},
	addProject: function(req,res,next){
		var project = new Project(req.body);
		project.save(function(err,docs){
			console.log("添加项目信息成功");
			return res.json(docs);
		});
	},
	rmProject: function(req,res,next){
		var condition = req.body;
		Project.remove(condition,function(err,docs){
			console.log('删除项目名为' + condition.name + "，日期为" + condition.date + "的项目");
			return res.json(docs);
		});
	},
	rmAllProject: function(req,res,next){
		var condition = req.body;
		Project.remove(function(err,docs){
			console.log('删除所有项目');
			return res.json(docs);
		});
	},
	udProject: function(req,res,next){
		var projnum = req.body.projnum;
		var body = req.body.body;
		Project.update({"projnum":projnum},{$set:body},function(){
			console.log("更新项目成功");
			return res.json(Project);
		});
	},


	// Users
	getUser: function(req,res,next){
		User.find().exec(function(err,docs){
			console.log("获取用户信息成功");
			return res.json(docs);
		});
	},
	addUser: function(req,res,next){
		var user = new User(req.body);
		user.save(function(err,docs){
			console.log("添加用户信息成功");
			return res.json(docs);
		});
	},
	rmUser: function(req,res,next){
		var condition = req.body;
		User.remove(condition,function(err,docs){
			console.log('删除用户名为' + condition.name + "，日期为" + condition.date + "的项目");
			return res.json(docs);
		});
	},
	rmAllUser: function(req,res,next){
		var condition = req.body;
		User.remove(function(err,docs){
			console.log('删除所有用户');
			return res.json(docs);
		});
	},
	udUser: function(req,res,next){
		var usernum = req.body.usernum;
		var body = req.body.body;
		User.update({"usernum":usernum},{$set:body},function(){
			console.log("更新用户成功");
			return res.json(User);
		});
	},


	// Data
	getData: function(req,res,next){
		Data.find().exec(function(err,docs){
			console.log("获取数据信息成功");
			return res.json(docs);
		});
	},
	addData: function(req,res,next){
		var data = new Data(req.body);
		data.save(function(err,docs){
			console.log("添加数据信息成功");
			return res.json(docs);
		});
	},
	rmData: function(req,res,next){
		var condition = req.body;
		User.remove(condition,function(err,docs){
			console.log('删除数据名为' + condition.name + "，日期为" + condition.date + "的项目");
			return res.json(docs);
		});
	},
	rmAllData: function(req,res,next){
		var condition = req.body;
		Data.remove(function(err,docs){
			console.log('删除所有数据');
			return res.json(docs);
		});
	},
	udData: function(req,res,next){
		var datanum = req.body.datanum;
		var body = req.body.body;
		Data.update({"datanum":datanum},{$set:body},function(){
			console.log("更新数据信息成功");
			return res.json(Data);
		});
	},
}

// Project Routes

app.route('/getProject').get(projectController.getProject);
app.route('/addProject').post(projectController.addProject);
app.route('/rmProject').post(projectController.rmProject);
app.route('/rmAllProject').get(projectController.rmAllProject);
app.route('/udProject').post(projectController.udProject);

// User Routes
app.route('/getUser').get(projectController.getUser);
app.route('/addUser').post(projectController.addUser);
app.route('/rmUser').post(projectController.rmUser);
app.route('/rmAllUser').get(projectController.rmAllUser);
app.route('/udUser').post(projectController.udUser);

// Data Routes
app.route('/getData').get(projectController.getData);
app.route('/addData').post(projectController.addData);
app.route('/rmData').post(projectController.rmData);
app.route('/rmAllData').get(projectController.rmAllData);
app.route('/udData').post(projectController.udData);


// curl localhost:7000/getProject

// var dataSchema = mongoose.Schema({
// 	datanum: String,
// 	date: String,
// 	temp: String,
// 	humi: String,
// 	illu: String,
// 	soilwater: String,
// 	soiltemp: String,
// 	soilfert: String,
// });
// curl -l -H "Content-type: application/json" -X POST -d '{"projnum":"1", "name":"天天造林","type":"造林","size":"58亩","location":"成都市龙泉驿区XX镇","funding":"40000000","progress":"0.3","company":"植树万岁","resp":"刘夏原","start":"2019-01-01","description":"该项目为植树万岁公司法人刘夏原全额资助的森林建造工程，项目性质为公益慈善","document":[{"cert_name":"许可证1","cert_url":"#","cert_date":"2019-01-01"},{"cert_name":"许可证2","cert_url":"#","cert_date":"2019-01-07"}],"img":"#"}' localhost:7000/addProject
// curl -l -H "Content-type: application/json" -X POST -d '{"usernum":"1", "username":"刘夏原","location":"美国西雅图","phonenum":"180xxxxyyyy","company":"植树万岁","proj":[{"name":"天天造林","projnum":"1"}]}' localhost:7000/addUser
// curl -l -H "Content-type: application/json" -X POST -d '{"datanum":"1", "date":"2019-07-01", "temp":"30", "humi":"71", "illu":"12500", "soilwater":"42", "soiltemp":"25","soilfert":"17" }' localhost:7000/addData
// curl -l -H "Content-typ '{"projnum":"1"}' localhost:7000/rmProject

// curl -l -H "Content-type: application/json" -X POST -d '{"usernum":"1"}' localhost:7000/addUser
// curl -l -H "Content-type: application/json" -X POST -d '{"datanum":"1"}' localhost:7000/addData

// curl localhost:7000/rmAllData
// curl localhost:7000/rmAllUser






// 404



app.use(function(req, res, next){
	res.status(404);
	try{
		return res.json('404 not found');
	}catch(e){
		console.error('404 set header after sent');
	}
});
// 500
app.use(function(req, res, next){
	if(!err){return next()}
		res.status(500);
	try{
		return res.json(err.message || 'server.error');
	}catch(e){
		console.error('500 set header after sent');
	}
});


app.listen(7000, function(){
	console.log('app started, Lisening on the port:7000');
});