'use strict';

/**
 * @ngdoc function
 * @name angularApp.controller:RecommendationCtrl
 * @description
 * # RecommendationCtrl
 * Controller of the angularApp
 */
angular.module('guidelinePreviewApp')
  .controller('RecommendationCtrl', ['$scope', 'Recommendation', 'toastr', '$routeParams', function ($scope, Recommendation, toastr, $routeParams) {
    var recommendationId = $routeParams.recommendationId;
    Recommendation.get({_id: recommendationId}).$promise.then(function(recommendation){
      		//success
    		$scope.recommendation = recommendation;
      	}, function(error){
      		console.log(error);
      		toastr.error(error.data.message, 'Error!');
      	});
  }]);
