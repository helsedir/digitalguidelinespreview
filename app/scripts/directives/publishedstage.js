'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:publishedStage
 * @description
 * # publishedStage
 */
angular.module('guidelinePreviewApp')
  .directive('publishedStage', function ($parse) {
    return {
      template: '<div class="publishedstage {{publishedStage}}">{{resource}} er {{publishedStageText}}</div>',
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
