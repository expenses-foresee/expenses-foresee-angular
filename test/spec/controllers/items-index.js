describe('Controller: ItemsIndexCtrl', function () {

  beforeEach(module('expensesForeseeAngularApp'));

  var $httpBackend, $rootScope, ItemsIndexCtrl, authRequestHandler;

  beforeEach(inject(function($injector) {


     $httpBackend = $injector.get('$httpBackend');
     authRequestHandler = $httpBackend.when('GET', '/items')
                            .respond({name: 'item_1'}, {'description': 'item_1_description'});

     $rootScope = $injector.get('$rootScope');

     var $controller = $injector.get('$controller');

     ItemsIndexCtrl = function() {
       return $controller('ItemsIndexCtrl', {'$scope' : $rootScope });
     };
   }));


   afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

  it('should attach a list of items to the scope', function () {
    $httpBackend.expectGET('/items');
    var controller = ItemsIndexCtrl();
    $httpBackend.flush();
    expect($rootScope.items.name).toBe('item_1');
  });
});