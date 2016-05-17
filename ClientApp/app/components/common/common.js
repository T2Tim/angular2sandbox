import angular from 'angular';

import {navButtonDirective} from './navButton/navButton.directive';

export const common = angular.module('common', [])
    .directive('navbutton', navButtonDirective);
