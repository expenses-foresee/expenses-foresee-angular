(function(){
  angular.module('expensesForeseeAngularApp')
  .controller('TransactionsIndexCtrl', function ($scope, $routeParams, Transaction) {
  	$scope.transactions = Transaction.query();
  });
})();