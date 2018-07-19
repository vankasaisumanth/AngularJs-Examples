var app = angular.module("app",[]);
app.controller("emp",["$scope","$http",function($scope,$http){
	//$scope.a=10;
	//$scope.b=20;

	$scope.doDoubleAndSum = function(){
		$http({
			url:'http://localhost:4467/sum?a=' +$scope.a +'&b='+$scope.b,
			method:'GET'
		})
		.then(
			function(resp){
				//success function
				$scope.sum = resp.data;
			},
			function(resp){
				//failure function
				alert("Error occured!");
			});
		
	};
}])