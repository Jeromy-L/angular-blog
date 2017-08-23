import app from 'app'

require('./background.less')

app.directive('bgImg', function(){
	return {
		scope: {
			bgImgs : '=bgImgs' 
		}, 
		controller: function($scope, $element, $attrs, $transclude) {
			//console.log($scope.bgImgs);
			
        },
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: require('./background.html'),
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	}
}) 