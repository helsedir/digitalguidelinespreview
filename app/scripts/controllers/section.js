'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:SectionCtrl
 * @description
 * # SectionCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('SectionCtrl',['Section', 'Guideline', 'toastr', '$scope', '$routeParams', '$location', function (Section, Guideline, toastr, $scope, $routeParams, $location) {
    var guidelineId = $routeParams.guidelineId;
    var sectionId = $routeParams.sectionId;
    var preview = false;
    preview = ($location.search()).preview;

    Guideline.get({_id: guidelineId, preview: preview}).$promise.then(function(guideline){
      		//success
    		$scope.guideline = guideline;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
    Section.get({_id: sectionId, preview: preview}).$promise.then(function(section){
      		//success
    		$scope.section = section;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
  }]);
