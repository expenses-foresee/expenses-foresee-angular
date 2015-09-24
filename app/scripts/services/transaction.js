(function(){
  angular.module('expensesForeseeAngularApp')
  .factory('Transaction', function TransactionFactory($resource) {
    return $resource('transaction/:id', {}, {});
  });
})();
