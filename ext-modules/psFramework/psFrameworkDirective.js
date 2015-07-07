'use strict';

angular.module('psFramework').directive('psFramework', function () {
	return {
		transclude: true, //cuz I will enbed the menu in psFramework
		scope: {
            title: '@',
            subtitle: '@',
            iconFile: '@'
		},
		controller: 'psFrameworkController',
		templateUrl: 'ext-modules/psFramework/psFrameworkTemplate.html'
	};
});