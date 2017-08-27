import app from 'app'

require('./essay.less')

app.directive('essay',function(){
	return{
		scope: {
			"data":"=data"
		},
		controller: function($scope,$element,$attrs,$transclude){

		},
		restrict: 'E',
		template: require('./essay.html'),
		replace: true,
		transclude: true,
		link: function($scope, iElm, iAttrs, controller){
			
		}
	}
})