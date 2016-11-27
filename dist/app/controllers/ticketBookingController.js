bookMyShow.controller('ticketBookingController', ['$scope','dataService','$state', function($scope,dataService,$state){

	var max_seat = dataService.getCustData().noSeat;
	if(max_seat === undefined){
		$state.go('home');
	}

	var serverData = dataService.getServerData();

	$scope.row_name = serverData.row;
	$scope.col_name = serverData.col;
	$scope.res = serverData.reserved;

	$scope.errorMsg = "";

	var temp_booked_seat = {};
	var temp_booked_seat_count = 0;

	$scope.booked_seat_output = "";

	$scope.bookSeat = function(row,col,$event){
		$scope.errorMsg = "";
		if((row in $scope.res)){
			if($scope.res[row].indexOf(col) > -1){
				return false;
			}
		}	

		if(temp_booked_seat_count==max_seat){
			temp_booked_seat = {};
			temp_booked_seat_count = 0;
			$scope.booked_seat_output = "";
			$('.temp-booked-seat').removeClass('temp-booked-seat');
		}

		$($event.currentTarget).addClass('temp-booked-seat');
		temp_booked_seat[row]=temp_booked_seat[row] || [];
		temp_booked_seat[row].push(col);
		temp_booked_seat_count++;

		$scope.booked_seat_output = $scope.booked_seat_output+" "+$scope.row_name[row]+""+(col+1);
	}

	$scope.confirmBooking = function(){
		if(temp_booked_seat_count != max_seat){
			$scope.errorMsg = "Please you need to select "+max_seat+" seat(s).";
			return false;
		}
		dataService.reserveSeats(temp_booked_seat,$scope.booked_seat_output);
		$state.go('thankyou');
	}

}]);