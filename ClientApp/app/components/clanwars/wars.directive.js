
import template from './wars.html';
import {WarController as controller} from './wars.controller';

export const warDirective = () => {
    return {
        template,
        controller,
        controllerAs: 'vm',
        scope: {},
        restrict: 'E',
        replace: true
    }
}