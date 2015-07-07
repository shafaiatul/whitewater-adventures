'use strict';

angular.module('psMenu').directive('psMenuItem', function() {
        return {
            require: '^psMenu', //I need the psMenu controller 
            scope: {
                label: '@',
                icon: '@',
                route: '@'
            },
            templateUrl: 'ext-modules/psMenu/psMenuItemTemplate.html',
            controller: 'psMenuController',
            link: function(scope, el, attr, ctrl) {
                scope.isActive = function () {
                    return el === ctrl.getActiveElement();
                };
               //now when user clicks on the item
                el.on('click', function (evt) {
                    evt.stopPropagation();
                    evt.preventDefault(); //give the user exclusive excess to the click event.
                    scope.$apply(function() {
                        ctrl.setActiveElement(el);
                        ctrl.setRoute(scope.route);
                    });
                });
            }
        }
    });