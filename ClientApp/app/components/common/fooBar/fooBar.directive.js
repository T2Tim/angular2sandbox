
import template from './fooBar.html';
import {FooBarController as controller} from './fooBar.controller';

export const fooBarDirective = () => {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope: {},
        bindToController: true,
        controller,
        controllerAs: 'vm'
    }
}