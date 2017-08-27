require("./index.less")
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
			},
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
			},
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
			],
			$scope.articles = [
				{
					"title":"北三彭于晏自传",
					"category":"传记",
					"date":"2017-08-26",
					"content":"陈子么安徽覅大煞风景爱上了的积分好色韩国咦而撒地方撒大哥可能是打发红烧冬瓜"
				},
				{
					"title":"北三彭于晏自传",
					"category":"传记",
					"date":"2017-08-26",
					"content":"陈子么安徽覅大煞风景爱上了的积分好色韩国咦而撒地方撒大哥可能是打发红烧冬瓜"
				}
				
			]
			console.log($scope.articles)
    })
}