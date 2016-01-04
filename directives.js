//DIRECTIVE

	weatherApp.directive("weatherDirective", function(){
		return {
			restrict: 'E',
			templateUrl: 'directives/weatherDirective.html',
			replace: true,
			scope: {
				weatherDay: '=',
				convertToStandard: '&',
				convertToDate: '&',
				dateFormat: '@'
			}
		}
	});


