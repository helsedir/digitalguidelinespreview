var retningslinjeApp = angular.module('retningslinjeApp', [
	'ngRoute', 'retningslinjeControllers', 'ngResource']);

retningslinjeApp.config(['$routeProvider', 
	function($routeProvider){
		$routeProvider.when('/', {
			templateUrl: 'partials/guidelines_frontpage.html',
			controller: 'guidelinesListCtrl'
		}).
		when('/search', {
			templateUrl: 'partials/guidelines_search.html',
			controller: 'searchCtrl'
		}).
		when('/:guidelineId', {
			templateUrl: 'partials/guideline_frontpage.html',
			controller: 'guidelineSectionCtrl',
		}).
		when('/:guidelineId/section/:sectionId', {
			templateUrl: 'partials/guideline_recommendations.html',
			controller: 'guidelineRecommendationCtrl',
		}).
		when('/:guidelineId/childsectionIndex/:sectionId', {
			templateUrl: 'partials/guideline_childsection.html',
			controller: 'guidelineChildsectionCtrl',
		}).
		when('/:guidelineId/section/:sectionId/recommendation/:recommendationId', {
			templateUrl: 'partials/guideline_standalonerecommendation.html',
			controller: 'guidelineSingleRecommendationCtrl',
		}).
		
		otherwise({
			redirectTo: '/'
		});
	}]);

retningslinjeApp.filter('unsafe', function($sce) {
    return function(val) {
        return $sce.trustAsHtml(val);
    };
});