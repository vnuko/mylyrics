mylyrics.controller('homeController', function($scope, $location) {
  $scope.onSearch = function() {
    $location.path("/" + $scope.artist.toLowerCase() + "/" + $scope.title.toLowerCase());
  }
});
