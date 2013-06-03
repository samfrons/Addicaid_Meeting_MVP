'use strict';

describe('Controller: MeetingDetailSmallCtrl', function () {

  // load the controller's module
  beforeEach(module('addicaidSiteApp'));

  var MeetingDetailSmallCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MeetingDetailSmallCtrl = $controller('MeetingDetailSmallCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
