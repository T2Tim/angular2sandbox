
import {fooBarDirective} from './fooBar.directive';

(function(window, angular){
    angular.module('foo.bar.test', [])
    .directive('fooBar', fooBarDirective);
})(window, window.angular);