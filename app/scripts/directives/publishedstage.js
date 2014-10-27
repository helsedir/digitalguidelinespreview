'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:publishedStage
 * @description
 * # publishedStage
 */
angular.module('angularApp')
  .directive('publishedStage', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the publishedStage directive');
      }
    };
  });
