require("./index.less");
var http = require("http");
module.exports = function(mod) {
    mod.controller('indexCtrl', function($scope) {
			$scope.myself = {
				"config" :	{
					"type":"myself"
				},
				"data":{
					"imgSrc"	: "./jeromy.jpg",
					"name"	: "Jeromy",
					"description": "一个半吊子的前端攻城狮"
				}
			};
			$scope.sideNav = {
				"config" : {
					"type" : "sideNav"
				},
				"data":{
					"content" : [
						{
							"url" : "#",
							"text": '主页'
						},
						{
							"url" : "#",
							"text": '分类'
						},
						{
							"url" : "#",
							"text": '关于'
						},
					],
					"title" : "Jeromy's Blog",
					"description" : "年轻人没事少撸点码，多做点白日梦"
				}
			};
			$scope.bgImgs = [
				{
					"src":"./img/1.jpg",
				},
				{
					"src":"./img/2.jpg",
				},
				{
					"src":"./img/3.jpg",
				},
				{
					"src":"./img/4.jpg",
				},
				{
					"src":"./img/5.jpg",
				},
				{
					"src":"./img/6.jpg",
				}
			];
			$scope.articles = [
		
				
			];
			
			var options={
				hostname:"localhost",
				port:3000
			}
			
			var req=http.request(options,function(res){
				res.setEncoding("utf-8");
				res.on("data",function(chunk){
					//console.log(chunk.toString())
					$scope.$apply(function(){$scope.articles = JSON.parse(chunk).articles});
					console.log($scope.articles);
					
				});
			});
			req.on("error",function(err){
				console.log(err.message);
			});
			req.end();
			
    })
}