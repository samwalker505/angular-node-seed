var app = angular.module('seedApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/partials/test'
  })
  .otherwise({
      redirectTo: '/'
    })
  // configure html5 to get links working on jsfiddle

  $locationProvider.html5Mode(true);
});
