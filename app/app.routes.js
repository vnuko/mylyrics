mylyrics.config(function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
    .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeController'
    })
    .when('/:artist/:title', {
      templateUrl: 'views/lyrics.html',
      controller: 'lyricsController'
    })
});
