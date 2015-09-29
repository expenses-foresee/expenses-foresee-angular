(function(){
  angular
  .module('expensesForeseeAngularApp')
  .controller('ItemsIndexCtrl', ItemsIndexCtrl);

  function ItemsIndexCtrl($scope, Item) {
  	$scope.items = Item.query();
  }
})();