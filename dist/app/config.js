var bookMyShow = angular.module('bookMyShow', ['ui.router']);

bookMyShow.config(['$urlRouterProvider','$stateProvider',function($urlRouterProvider,$stateProvider) {
	

	$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('home',{
			url : '/home',
			templateUrl : 'dist/app/views/home.html',
			controller : 'appHomeController' 
		})
		.state('booking',{
			url : '/booking',
			templateUrl : 'dist/app/views/ticketBook.html',
			controller : 'ticketBookingController' 
		})
		.state('thankyou',{
			url : '/thankyou',
			templateUrl : 'dist/app/views/thankyou.html' 
		})
		.state('customer-list',{
			url : '/customer-list',
			templateUrl : 'dist/app/views/customer-list.html',
			controller : 'customerlistController' 
		});
}]);




