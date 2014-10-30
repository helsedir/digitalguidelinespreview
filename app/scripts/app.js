'use strict';

/**
 * @ngdoc overview
 * @name angularApp
 * @description
 * # angularApp
 *
 * Main module of the application.
 */
angular
  .module('guidelinePreviewApp', ['ngRoute', 'ngResource', 'toastr', 'LocalStorageModule'])
  .config(['$httpProvider', function ($httpProvider) {
      $httpProvider.interceptors.push('authInterceptorService');
  }])
  .config(['localStorageServiceProvider', function (localStorageServiceProvider) {
      localStorageServiceProvider.setPrefix('ls');
  }])


  .config(['$routeProvider', 
  	function($routeProvider){
  		$routeProvider.when('/', {
  			templateUrl: 'views/main.html',
  			controller: 'MainCtrl'
  		}).
  		when('/:guidelineId', {
  			templateUrl: 'views/guideline.html',
  			controller: 'GuidelineCtrl',
  		}).
  		when('/:guidelineId/section/:sectionId', {
  			templateUrl: 'views/section.html',
  			controller: 'SectionCtrl',
  		}).
  		when('/:guidelineId/childsectionIndex/:sectionId', {
  			templateUrl: 'views/childsection.html',
  			controller: 'SectionCtrl',
  		}).
  		when('/:guidelineId/section/:sectionId/recommendation/:recommendationId', {
  			templateUrl: 'views/recommendation.html',
  			controller: 'RecommendationCtrl',
  		}).
      when('/notpublished/:notpublished', {
        templateUrl: 'views/notpublished.html'
      }).
     
  		
  		otherwise({
  			redirectTo: '/'
  		});
  	}])

  .filter('unsafe',['$sce', function($sce) {
      return function(val) {
          return $sce.trustAsHtml(val);
      };
  }]);
