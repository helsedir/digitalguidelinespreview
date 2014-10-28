'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:publishedStage
 * @description
 * # publishedStage
 */
angular.module('guidelinePreviewApp')
  .directive('publishedStage', function () {
    return {
      template: '<div class="publishedstage"><p><span class="glyphicon glyphicon-info-sign"></span> {{resource}} er {{publishedStageText}}</p></div>',
      restrict: 'E',
      scope: { 'publishedStage': '=publishedstage', 'resource': '@' },
      link: function postLink(scope, element, attrs) {
      	scope.$watch('publishedStage', function() { 
      		switch(scope.publishedStage){
      			case 0:
      				scope.publishedStageText = "kladd";

      				break;
      			case 1:
      				scope.publishedStageText = "sent på høring";

      				break;
      			case 2:
      				scope.publishedStageText = "publisert";

      				break;
      		}

      	 });
      }
    };
  });
