(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.checkMessage = "";

  $scope.checkIfTooMuch = function () {
    if ($scope.dishes === "") {
      prepareCheckMessage(0);
    } else {
      const dishesArray = $scope.dishes.split(',');
      prepareCheckMessage(dishesArray.length);
    }
  };

  function prepareCheckMessage(dishesCount) {
    switch (dishesCount) {
      case 0:
        $scope.checkMessage = "Please enter data first";
        break;
      case 1:
      case 2:
      case 3:
        $scope.checkMessage = "Enjoy!";
        break;
      default:
        $scope.checkMessage = "Too much!"
    }
  };
}

})();
