var app = angular.module("app",[]);
app.controller("emp",["$scope","calcFactory",function($scope,calcFactory){
	$scope.a=10;
	$scope.b=20;
	$scope.doSum = function(){
		//$scope.sum = calcFactory.getSum($scope.a, $scope.b);
		calcFactory.getSum($scope.a, $scope.b,function(r){
			$scope.sum =r;
		});
	//Above is asynchronous way by using call back function.... If we use this type of call back function it wont wait till the execution of that function which happens in case of synchronous way9we can save waiting time 
	};

}]);

app.factory('calcFactory',["$http","$log",function($http,$log){
	$log.log("instatiating calcFactory..");
	var oCalcService = {};
	/*oCalcService.getSum = function(a,b){
		return (parseInt(a)+parseInt(b));
	};*/
	oCalcService.getSum = function(a,b,cb){
		var s = (parseInt(a)+parseInt(b));
		cb(s)
	};
	return oCalcService;
}]);