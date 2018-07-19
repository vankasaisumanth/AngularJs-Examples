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
	var oCalcService = {};
	oCalcService.getSum= function(a,b,cb){
		$http({
			url:'http://localhost:4467/sum?a='+a+'&b='+b,
			method: 'GET'
		}).then(function(resp){
			cb(resp.data);
		},
		funtion(resp){
			$log.error("ERROR OCCURED!");
		});
	};
	return oCalcService;
}]);