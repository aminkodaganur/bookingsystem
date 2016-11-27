bookMyShow.controller('customerlistController', ['$scope','dataService','$state', function($scope,dataService,$state){
	$scope.custList = dataService.getCustList();
}]);