'use strict';
angular.module('doprr.home', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
    });
  }])
  .controller('homeCtrl', ['$scope', function ($scope) {
    console.log('hometttt', $scope)
    $scope.doprrOpen = function (dataId) {
      console.log("open : ", dataId)
    }
  }]);