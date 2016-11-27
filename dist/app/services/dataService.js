bookMyShow.service('dataService',function(){
	var custData = {};
	var serverData = {
		row : ['A','B','C','D','E','F','G','H','I','J'],
		col : [1,2,3,4,5,6,7,8,9,10,11,12],
		reserved : {
					0 : [0,4,7,11],
					1 : [],
					2 : [],
					3 : [],
					4 : [1,2,8],
					5 : [],
					6 : [],
					7 : [],
					8 : [],
					9 : []
				}
	}
	var custList = [
		{
			name : 'Amin Kodaganur',
			no_of_seats : 4 ,
			seats_no : 'A1 A5 A6 A12'
		},
		{
			name : 'Rahul Patil',
			no_of_seats : 3 ,
			seats_no : 'E2 E3 E9'			
		}
	];
	var putCustData = function(custName,noSeat){
		custData.name = custName;
		custData.noSeat = noSeat;
	} 

	var getCustData = function(){
		return custData;
	}

	var getServerData = function(){
		return serverData;
	}

	var reserveSeats = function(needToRes,seats){
		$.each(needToRes, function(index, val) {
			for(i=0;i<val.length;i++){
				serverData['reserved'][index].push(val[i]);
			}
		});

		var temp_d = {}
		temp_d.name = custData.name;
		temp_d.no_of_seats = custData.noSeat;
		temp_d.seats_no = seats;
		custList.push(temp_d);

		custData = {};
		
	}

	var getCustList = function(){
		return custList;
	}

	return {
		putCustData : putCustData,
		getCustData : getCustData,
		getServerData : getServerData,
		reserveSeats : reserveSeats,
		getCustList : getCustList
	}

});