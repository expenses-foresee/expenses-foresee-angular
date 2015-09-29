describe('Service: Item', function () {
  var $httpBackend, $rootScope;

  beforeEach(module('expensesForeseeAngularApp'));

  beforeEach(inject(function ($injector) {
    $httpBackend = $injector.get('$httpBackend');
    $rootScope = $injector.get('$rootScope');
    mockItemResource = $injector.get('Item');
  }));


});