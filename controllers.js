//CONTROLLERS
	weatherApp.controller('homeController',['$scope', '$log', 'porcelanskiServis', function($scope, $log, porcelanskiServis){
			
			$scope.grad = porcelanskiServis.grad;
			$scope.$watch('grad', function(){
	   				porcelanskiServis.grad = $scope.grad;
	   			});
	   			
	   			


	}]);


	weatherApp.controller('weatherController',['$scope', '$resource', '$routeParams', 'porcelanskiServis', function($scope, $resource, $routeParams, porcelanskiServis){
			
			$scope.grad = porcelanskiServis.grad;

			$scope.days = $routeParams.days || '2';

			$scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast/daily", {callback: "JSON_CALLBACK"}, { get: { method: "JSONP"}});

			$scope.weatherResult = $scope.weatherAPI.get({q: $scope.grad, appid: '2c53dab059c6e4363bba32efe6a0cff9', cnt: $scope.days});
			
			$scope.weatherToCelsius = function(degK){
				return Math.round(degK - 273.15);	
			};

			$scope.convertToDate = function(dt){
				return new Date(dt * 1000);	
			};
			
	}]);