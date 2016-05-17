import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {warDirective} from './wars.directive';

export const war = angular.module('war', [uiRouter, 'ngMaterial'])
    .config(function($stateProvider){
        $stateProvider.state('wars', {
            url: '/war',
            template: '<war></war>'
        });
    })
    .directive('war', warDirective);