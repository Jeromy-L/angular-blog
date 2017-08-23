import app from 'app'

require('./background.less')

app.directive('bgImg', function(){
	return {
		scope: {}, 
		controller: function($scope, $element, $attrs, $transclude) {
            
        },
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: require('./background.html'),
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	}
}) 