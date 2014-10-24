'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:GuidelineCtrl
 * @description
 * # GuidelineCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('GuidelineCtrl',['Guideline', 'toastr', '$scope', '$routeParams', function (Guideline, toastr, $scope, $routeParams) {
    var guidelineId = $routeParams.guidelineId;
    Guideline.get({_id: guidelineId}).$promise.then(function(guideline){
      		//success
    		$scope.retningslinje = guideline;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
  }]);
