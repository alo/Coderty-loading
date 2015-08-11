(function(){
    'use strict';

/**
 * @name codertyLoading
 * @desc <coderty-loading> Directive
 */
function codertyLoading () {


    return {
        restrict: 'A',
        scope: {
            codertyLoading: '='
        },
        transclude: true,
        template: [
            '<div class="spinner-pers-container" ng-show="codertyLoading">',
            '   <svg class="spinner-pers" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">',
            '       <circle class="path" fill="none" stroke-width="6" stroke-linecap="round" cx="33" cy="33" r="30"></circle>',
            '   </svg>',
            '</div>',
            '<div ng-transclude ng-hide="codertyLoading"></div>'
        ].join('')
    };

}
angular
    .module('codertyLoading', [])
    .directive('codertyLoading', codertyLoading);

})();