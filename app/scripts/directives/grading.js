'use strict';

/**
 * @ngdoc directive
 * @name angularApp.directive:grading
 * @description
 * # grading
 */
angular.module('guidelinePreviewApp')
.directive('grading', function() {

            function link(scope, element, attrs) {
                scope.$watch(attrs.grading, function(value) {

                        if (attrs.grading == "strong")
                            element.addClass("gradingStrong");
                        else if (attrs.grading == "weak")
                            element.addClass("gradingWeak");
                        else
                            element.addClass("gradingNone");
                    }

                );
            }

            return {
                restrict: 'A',
                link: link
            };

        });

      