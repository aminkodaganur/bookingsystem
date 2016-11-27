bookMyShow.controller('appHomeController', ['$scope','dataService','$state', function($scope,dataService,$state){
	$scope.errorMsg = "";

	$scope.procedeToNext = function(){
		$scope.errorMsg = "";

		if($scope.custName == '' || typeof $scope.custName == 'undefined'){
			$scope.errorMsg = 'Please enter your name.';
			return false;
		}

		if(typeof $scope.seats == 'undefined'){
			$scope.errorMsg = 'Please select no seats.';
			return false;
		}
		dataService.putCustData($scope.custName,$scope.seats);
		$state.go('booking');
		// console.log(dataService.getCustData());

	}

}]);

