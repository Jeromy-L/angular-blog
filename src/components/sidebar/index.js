import app from 'app'

require('./sidebar.less')

app.directive('sidebar', function(){
	return {
		scope: {
            about : '=about'
        }, 
		controller: function($scope, $element, $attrs, $transclude) {
			// $scope.about = {
			// 	"imgSrc"	: "./jeromy.jpg",
			// 	"name"	: "Jeromy",
			// 	"description": "一个半吊子的前端攻城狮"
			// }
			console.log($scope.about)
		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: require('./sidebar.html'),
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	}
}) 