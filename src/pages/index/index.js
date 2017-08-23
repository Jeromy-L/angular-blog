module.exports = function(mod) {
    mod.controller('indexCtrl', function($scope) {
			$scope.about = {
				"imgSrc"	: "./jeromy.jpg",
				"name"	: "Jeromy",
				"description": "一个半吊子的前端攻城狮"
			},
			$scope.bgImgs = [
				{
					"src":"./img/1.jpg",
					"show":"true"
				},
				{
					"src":"./img/2.jpg",
					"show":'false'
				},
				{
					"src":"./img/3.jpg",
					"show":'false'
				},
				{
					"src":"./img/4.jpg",
					"show":'false'
				},
				{
					"src":"./img/5.jpg",
					"show":'false'
				},
				{
					"src":"./img/6.jpg",
					"show":'false'
				}
			]
			//console.log($scope.bgImgs)
    })
}