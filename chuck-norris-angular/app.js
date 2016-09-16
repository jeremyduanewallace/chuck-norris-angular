angular.module('NorrisApp', [])
.controller('NorrisCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.jokeCount = 1;
  $scope.jokes = [];

  $scope.$watch('jokeCount', function(newVal, oldVal) {
    //console.log('Changed Joke count', oldVal, newVal);
    $scope.getJokes();
  });

  $scope.getJokes = function() {
    var req = {
      url: 'http://api.icndb.com/jokes/random/' + $scope.jokeCount,
      method: 'GET'
    }

    $http(req).then(function success(res) {
      $scope.jokes = res.data.value;
    }, function error(res) {
      console.log(res);
    });
  }
}]);