
import {appDirective} from './app.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

angular.module('app', [
  uiRouter
])
.directive('app', appDirective);
