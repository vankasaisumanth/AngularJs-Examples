var app = angular.module("app",[]);
app.controller("emp",["$scope","calcService",function($scope,calcService){
	$scope.a=10;
	$scope.b=20;
	$scope.doSum = function(){
		calcService.getSum($scope.a, $scope.b,function(r){
			$scope.sum = r;
		});
};

}]);

app.service('calcService',["$http","$log",function($http,$log){
	$log.log("instatiating calcService..");
	
	this.getSum= function(a,b,cb){
		var s= parseInt(a)+parseInt(b);
		cb(s);
	};
}]);