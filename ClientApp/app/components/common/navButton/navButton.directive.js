import template from './navButton.html';

export const navButtonDirective = () => {
    return {
        template,
        restrict: 'E',
        replace: true,
        scope: {}
    };
};