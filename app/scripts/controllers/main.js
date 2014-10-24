'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:MainctrlCtrl
 * @description
 * # MainctrlCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('MainCtrl', ['$scope', 'Guideline', 'toastr', function ($scope, Guideline, toastr) {
    Guideline.query().$promise.then(function(guidelines){
      		//success
    		$scope.guidelines = guidelines;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
  }]);
