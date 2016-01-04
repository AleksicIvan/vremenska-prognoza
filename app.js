//MODULE
var weatherApp = angular.module('weatherApp', ['ngRoute', 'ngResource']);

	/* 
	
	<!--weatherToCelsius(w.temp.day); convertToDate(w.dt) | date: 'MMM, d, y'-->
	
	
	myApp.config(function($routeProvider){

			$routeProvider

			.when('/', {
				templateUrl: 'pages/main.html',
				controller: 'mainController'
			})	

			.when('/second', {
				templateUrl: 'pages/second.html',
				controller: 'scndController'
			})

			.when('/second/:num', {
				templateUrl: 'pages/second.html',
				controller: 'scndController'
			})


		});

	myApp.service('porcelanskiServis', function(){

		var _this = this;
		this.name = 'Ivan Aleksic';

		this.serviceNameLength = function(){
			return _this.name.length;
		};	
	});

	myApp.controller('mainController', ['$scope', '$log', 'porcelanskiServis', function($scope, $log,porcelanskiServis) {
	   			$scope.name = porcelanskiServis.name;
	   			
	   			$scope.$watch('name', function(){
	   				porcelanskiServis.name = $scope.name;
	   			});
	   			
	   			$log.log(porcelanskiServis.name);

	   }]);

	
	myApp.controller('scndController', ['$scope', '$log', '$routeParams', 'porcelanskiServis', function($scope, $log, $routeParams, porcelanskiServis) {
	   			$scope.num = $routeParams.num || 666;	
	   			
	   			$scope.name = porcelanskiServis.name;
	   			
	   			$scope.$watch('name', function(){
	   				porcelanskiServis.name = $scope.name;
	   			});
	   			
	   			$log.log(porcelanskiServis.name);
	   			
	   }]);


      
    // -- Directive instructions -- Model View Two Way Data Binding
    
    $scope.handle = ''; 
  
    $scope.toLowerCaseHandle = function(){
        return $filter('lowercase')($scope.handle);
    };
	
	$scope.characters = 5;
	
	$scope.rules = [
		{rulename: 'Must have five characters!'},
		{rulename: 'Must ne used only here!'},
		{rulename: 'Must be cool!'},
		{rulename: 'Must be sexy!'}
	];
	
	
    console.log($scope.rules);
	
	/*
    $scope.$watch("handle", function(newValue, oldValue){
       
        console.info("Changed!");
        console.log("Old: " + oldValue);
        console.log("New: " + newValue);
         
    });
    
   $timeout(function(){
        
        
            $scope.handle = 'newtwiterhandle';
            console.log('Scope changed!');
                
    }, 3000);
	*/
	
    
    
    
   
    
     

    
    
    


    