(function(){
  angular.module('expensesForeseeAngularApp')
  .controller('ItemsIndexCtrl', function ($scope, $routeParams, Item) {
  	$scope.items = Item.query();
  });
})();