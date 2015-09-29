(function(){
  angular
  .module('expensesForeseeAngularApp')
  .factory('Item', ItemFactory);

  function ItemFactory($resource) {
  	return $resource('/items', null, {
  	  query: {
  	  	method: 'GET',
    	  isArray: false
      }
    });
  }
})();
