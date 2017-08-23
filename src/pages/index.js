import app from 'app'

app.config(function($stateProvider, $urlRouterProvider, $locationProvider, $controllerProvider, $provide) {
	$stateProvider
		.state('index', {
			url: "/",
			template: require('./index/index.html'),
			resolve: {
				loader($q, $state) {
					console.log($state)
					var defer = $q.defer()
					require.ensure(['./index/index.js'], function(mod) {
						defer.resolve(require('./index/index.js')({
							controller: $controllerProvider.register,
							factory: $provide.factory
						}))
					})
					return defer.promise
				}
			}
		})
	$locationProvider.html5Mode(true)
})