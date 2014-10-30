'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:RecommendationCtrl
 * @description
 * # RecommendationCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('RecommendationCtrl', ['$scope', 'Recommendation', 'toastr', '$routeParams', '$location', function ($scope, Recommendation, toastr, $routeParams, $location) {
    var recommendationId = $routeParams.recommendationId;
    var preview = false;
    preview = ($location.search()).preview;
    Recommendation.get({_id: recommendationId, preview: preview}).$promise.then(function(recommendation){
      		//success
    		$scope.recommendation = recommendation;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
  }]);
