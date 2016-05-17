import angular from 'angular';

//You have to register this directive below...
import {navButtonDirective} from './navButton/navButton.directive';

//This import is the directive and is wrapped in an IFFE - though it does need to be manually
//called out as a dependency in the component using it -
import './fooBar/fooBar';

export const common = angular.module('common', [])
    .directive('navbutton', navButtonDirective);
