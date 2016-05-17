import angular from 'angular';

import {navButtonDirective} from './navButton/navButton.directive';
import './fooBar/fooBar';

export const common = angular.module('common', [])
    .directive('navbutton', navButtonDirective);
