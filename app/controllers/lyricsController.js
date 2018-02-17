mylyrics.controller('lyricsController', function($scope, $http, $routeParams){

  $scope.response = "";

  $http.get('https://api.lyrics.ovh/v1/'+$routeParams.artist+'/'+$routeParams.title)
    .then(function(results) { //success
      $scope.response = results.data;
    }, function(results) { //error
      $scope.response = results.data;
    });

  $scope.getArtist = function() {
    return $routeParams.artist.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  },

  $scope.getTitle = function() {
    return $routeParams.title.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
  },

  $scope.formatResponse = function() {
    //lyrics not found
    if($scope.response && $scope.response.error) {
      return $scope.response.error;
    }
    //lyrics found
    if($scope.response && $scope.response.lyrics) {
      return $scope.response.lyrics.replace(/(\r\n|\n|\r)/g,"<br />");
    }
  }
});
