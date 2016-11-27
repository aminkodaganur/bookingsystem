bookMyShow.directive('dropdown',  function(){
	// Runs during compile
	return {
		restrict: 'A', 
		link: function($scope, iElm, iAttrs, controller) {
			$(iElm).dropdown();
		}
	};
});