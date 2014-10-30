'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainctrlCtrl
 * @description
 * # MainctrlCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('MainCtrl', ['$scope', 'Guideline', 'toastr', 'ErrorService', function ($scope, Guideline, toastr, ErrorService) {
    Guideline.query().$promise.then(function(guidelines){
      		//success
    		$scope.guidelines = guidelines;
      	}, function(error){
      		ErrorService.handleError(error);
      	});
  }]);
