var app = angular.module('mewmeApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/test', {
    templateUrl: '/partials/test'
  })
  .otherwise({
      redirectTo: '/test'
    })
  // configure html5 to get links working on jsfiddle

  $locationProvider.html5Mode(true);
});
