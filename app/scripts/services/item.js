(function(){
  angular.module('expensesForeseeAngularApp')
  .factory('Item', function ItemFactory($resource) {
    return $resource('items/:id', {}, {});
  });
})();
