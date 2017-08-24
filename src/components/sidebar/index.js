import app from 'app'

require('./sidebar.less')

app.directive('sidebar', function(){
	return {
		scope: {
			config : '=config',
			data : '=data'
        }, 
		controller: function($scope, $element, $attrs, $transclude) {
			
			
		},
		restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
		template: require('./sidebar.html'),
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller) {
			
		}
	}
}) 