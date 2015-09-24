(function(){
  angular.module('expensesForeseeAngularApp')
  .controller('CategoriesIndexCtrl', function ($scope,Category) {
  	$scope.categories = Category.query();
  	/*
  	JsonResource.query().$promise.then(function(data) {
      $scope.categories = "date";
    });
  */
  });
})();
