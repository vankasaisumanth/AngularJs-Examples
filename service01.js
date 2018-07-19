var app = angular.module("app",[]);
app.controller("emp",["$scope","calcService",function($scope,calcService){
	$scope.a=10;
	$scope.b=20;
	$scope.doSum = function(){
		$scope.sum = calcService.getSum($scope.a, $scope.b);
};

}]);

app.service('calcService',["$http","$log",function($http,$log){
	$log.log("instatiating calcService..");
	
	this.getSum= function(a,b){
		return parseInt(a)+parseInt(b);
	};
}]);