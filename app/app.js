'use strict';
// Declare app level module which depends on views, and components
angular.module('doprr', [
  'ngRoute',
  'doprr.home',
  'doprr.view2',
  'doprr.version'
]).
config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  $routeProvider.otherwise({redirectTo: '/home'});
}]).controller('doprrHomeController', function ($scope) {
  $scope.control3dModel="nn"
  }
).controller("faceView", function ($scope) {
    $scope.face = {
      getFaceTemplateHtml: function () {
        return "faceView/FaceView.html";
      }
    }
  })
  .controller("controls3D", function ($scope) {

    $scope.controls3D = {
      getControls: function () {
        return "faceView/controls3d.html";
      }
    }
  });
