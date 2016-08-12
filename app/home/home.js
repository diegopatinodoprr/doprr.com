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


    $scope.doprrOpen = function (dataId) {
      console.log("open : ", dataId)
    }
    $scope.callBackObje3d=function(data){
      console.log("avant : ",$scope.control3dModel)
      $scope.control3dModel=data.name
      console.log("apres ",$scope.control3dModel)
    }
    Draw3D.init($scope.callBackObje3d);
    Draw3D.animate();

  }]);