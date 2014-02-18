var app = angular.module('plunker', ['more-scroll']);

app.controller('MainCtrl', function($scope) {
  $scope.items = [1, 2, 3, 4, 5, 6, 7, 8, 10];

  $scope.loadMore = function() {
    var last = $scope.items[$scope.items.length - 1];
    for(var i = 1; i <= 5; i++) {
      $scope.items.push(last + i);
    }
  };
});

