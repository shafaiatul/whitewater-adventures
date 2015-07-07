'use strict',
    
angular.module('psMenu').controller('psMenuController', ['$scope', '$rootScope', function ($scope, $rootScope) {
        this.getActiveElement = function () {
            return $scope.activeElement;
        }
    
        this.setActiveElement = function (el) {
            $scope.activeElement = el; //this way psMenu will keep control of which item within the menu is active. And only one item can be active at a time.
        };
    
        this.setRoute = function (route) { //this is how have to communicate outside the psMenu control
            $rootScope.$broadcast('ps-menu-item-selected-event', { route: route });
        };

    }
]);