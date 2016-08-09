'use strict';

// Declare app level module which depends on views, and components
angular.module('doprr', [
  'ngRoute',
  'doprr.home',
  'doprr.view2',
  'doprr.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]).controller('doprrHomeController',function($scope)
{

}
).controller("faceView",function($scope)
{

  $scope.face={
    getFaceTemplateHtml:function(){

      return "faceView/FaceView.html";
    }
  }
});
