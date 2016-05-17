import template from './navButton.html';
import {NavButtonController as controller} from './navButton.controller';

export const navButtonDirective = () => {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope: {
            data: "=set"
        },
        bindToController: true,
        controller,
        controllerAs: 'vm'
    };
};