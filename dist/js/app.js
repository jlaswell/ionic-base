angular.module('todo', ['ionic', 'ngRoute', 'ngAnimate'])

.controller('TodoCtrl', function($scope, $http) {
  $scope.tasks = [
    { complete: true, title: 'Collect coins' },
    { complete: true, title: 'Eat mushrooms' },
    { complete: false, title: 'Get high enough to grab the flag' },
    { complete: false, title: 'Find the Princess' }
  ];

  $scope.toggleMenu = function() {
	  $scope.sideMenuController.toggleLeft();
	};

  $http.get('/')
  	.success(function(tasks) {
  		$scope.loaded = true;
  		$scope.tasks = tasks;
  	}).error(function(err) {
  		alert(err);
  	});
});