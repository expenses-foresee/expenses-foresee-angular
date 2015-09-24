(function(){
  angular.module('expensesForeseeAngularApp')
  .factory('Category', function CategoryFactory($resource) {
    return $resource('categories', {}, {
    });
  });
})();
