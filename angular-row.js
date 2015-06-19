(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([ 'module', 'angular' ], function (module, angular) {
            module.exports = factory(angular);
        });
    } else if (typeof module === 'object') {
        module.exports = factory(require('angular'));
    } else {
        if (!root.mp) {
            root.mp = {};
        }

        root.mp.row = factory(root.angular);
    }
}(this, function (angular) {
    'use strict';

    return angular.module('mp.row', []).directive('row', [ '$window', '$locale', function ($window, $locale) {
        // Introduce custom elements for IE8
        $window.document.createElement('row');

        return {
            restrict: 'AE',
            replace: true,
            transclude: true,
            template: '<div class="angular-row"><div class="_columns" ng-transclude></div></div>',

            link: function (scope, element, attributes) {
                attributes.$set('columns', element.children().eq(0).children().length);
            }
        };
    }]);
}));
