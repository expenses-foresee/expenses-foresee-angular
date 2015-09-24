describe('Controller: CategoriesIndexCtrl', function () {

  beforeEach(module('expensesForeseeAngularApp'));

  var CategoriesIndexCtrl,
    scope;

  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CategoriesIndexCtrl = $controller('CategoriesIndexCtrl', {
      $scope: scope,
    });
  }));

  it('should attach a list of categories to the scope', function () {
    expect(scope.categories.length).toBe(0);
  });
});