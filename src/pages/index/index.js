module.exports = function(mod) {
    mod.controller('indexCtrl', function($scope) {
		$scope.about = {
			"imgSrc"	: "./jeromy.jpg",
			"name"	: "Jeromy",
			"description": "一个半吊子的前端攻城狮"
		}
    })
}