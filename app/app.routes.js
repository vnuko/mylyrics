angular.
  module('mylyrics').
  config(function($routeProvider, $locationProvider){
    $locationProvider.hashPrefix('');
    $routeProvider
      .when('/', {
        templateUrl: 'app/views/home.html',
        controller: 'homeController'
      })
      .when('/:artist/:title', {
        templateUrl: 'app/views/lyrics.html',
        controller: 'lyricsController'
      })
  });
