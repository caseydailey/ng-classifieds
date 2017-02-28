(function(){

"use strict";

	angular 
	   .module('ngClassifieds')
	   .controller('editClassifiedsCtrl', function($scope, $state, $mdSidenav, $timeout, $mdDialog, classifiedsFactory){

	   		var vm = this;
	   			vm.saveEdit = saveEdit;
	   			vm.closeSidebar = closeSidebar;
	   			vm.classified = $state.params.classified;

	   		$timeout(function(){
	   			$mdSidenav('left').open();
	   		});

	   		$scope.$watch('vm.sidenavOpen', function(sidenav){
	   			if(sidenav === false) {
	   			  $mdSidenav('left')
	   				.close()
	   				.then(function(){
	   					$state.go('classifieds');
	   				});
	   			}
	   		});

	   		function closeSidebar(){
	   			vm.sidenavOpen = false;
	   		}

	   		function saveEdit() {
	   				$scope.$emit('editSaved', 'Edit Saved!');
	   				vm.sidenavOpen = false;	
	   			}

	   });

})();