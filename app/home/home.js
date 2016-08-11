'use strict';
angular.module('doprr.home', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
      templateUrl: 'home/home.html',
      controller: 'homeCtrl'
    });
  }])
  .controller('homeCtrl', ['$scope', function ($scope) {
  var Draw3D=new DoprrThree()



    Draw3D.init();
    Draw3D.animate();
    $scope.doprrOpen = function (dataId) {
      console.log("open : ", dataId)
    }
  }]);