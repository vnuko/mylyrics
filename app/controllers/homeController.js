angular.
  module('mylyrics').
  controller('homeController', function($scope, $http, $location) {
    $scope.response = "";

    $scope.onChange = function() {
      if($scope.search.length < 2) {
        return false;
      }

      $http.get('https://api.lyrics.ovh/suggest/'+$scope.search)
        .then(function(results) { //success
          $scope.response = results.data.data;
        }, function(results) { //error
          $scope.response = results.data.data;
        });
    }

    $scope.onSearch = function() {
      var search_params = $scope.search.split(',');
      $location.path("/" + search_params[0].trim().toLowerCase() + "/" + search_params[1].trim().toLowerCase());
    }

    $scope.onLinkClick = function(item) {
        $location.path("/" + item.artist.name.toLowerCase() + "/" + item.title.toLowerCase());
    }
  });
