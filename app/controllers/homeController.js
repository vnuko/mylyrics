angular.
  module('mylyrics').
  controller('homeController', function($scope, $http, $location) {
    $scope.response = "";

    /** on search input field change **/
    $scope.onChange = function() {
      if($scope.search.length < 2) {
        return false;
      }

      $http.get('https://api.lyrics.ovh/suggest/'+$scope.search)
        .then(function(results) { //success

          var sliced = results.data.data.slice(0,5);

          $scope.response = sliced;


        }, function(results) { //error
          $scope.response = results.data.data;
        });
    }

    /** on search button press **/
    /*
    $scope.onSearch = function() {
      var search_params = $scope.search.split(',');
      $location.path("/" + search_params[0].trim().toLowerCase() + "/" + search_params[1].trim().toLowerCase());
    }
    */

    /** on song suggestion link press **/
    $scope.onLinkClick = function(item) {
        $location.path("/" + item.artist.name.toLowerCase() + "/" + item.title.toLowerCase());
    }
  });
