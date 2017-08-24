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
							"text": '文章'
						},
						{
							"url" : "#",
							"text": '关于'
						},
					],
					"title" : "Jeromy's Blog",
					"description" : "年轻人没事少撸点码，多做点白日梦"
				}
			}
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
			]
			//console.log($scope.bgImgs)
    })
}