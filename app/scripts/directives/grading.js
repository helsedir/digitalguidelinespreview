'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:grading
 * @description
 * # grading
 */
angular.module('guidelinePreviewApp') 
.directive('grading', function() {
    return{
        restrict: 'A',
        
        link: function (scope, element, attrs) {
            attrs.$observe('grading', function(grading) {
                if (grading == "strong"){
                    element.addClass("gradingStrong");
                }
                else if (grading == "weak"){
                    element.addClass("gradingWeak");
                }
                else if (grading == "null"){
                    element.addClass("gradingNone");
                }
                else if (grading == null){
                    element.addClass("gradingNone");
                }
                else {
                    element.addClass("gradingNone");
                }
            });
        }
    };
});

      