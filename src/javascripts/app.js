var app = angular.module('mewmeApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider) {
  $routeProvider
   .when('/', {
    templateUrl: '/partials/mewme-index'
  })
  .otherwise({
      redirectTo: '/'
    })
  // configure html5 to get links working on jsfiddle

  $locationProvider.html5Mode(true);
});
